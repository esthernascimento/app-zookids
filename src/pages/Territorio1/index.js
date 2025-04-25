import { Text, View } from 'react-native';
import styles from './style';
import { FlatList, Image, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


export default function Territorio1() {
    const navigation = useNavigation();

    const [modal, setModal] = useState(false);
    const [animalSelecionado, setAnimalSelecionado] = useState(null);

    const showModal = (item) => {
        setAnimalSelecionado(item);
        setModal(true);
    };

    const voltar= () => {
        setModal(false);
        setAnimalSelecionado(null);
    }

    const dados = [
        {
          id: 1,
          nome: 'Onça Pintada',
          imagem: require('../../../assets/onca-pintada.png'),
          descricao: 'A onça-pintada é um grande felino encontrado na América do Sul e Central. É conhecida por sua pelagem amarelada com manchas escuras, que a ajuda a se camuflar na floresta. A onça-pintada é um predador solitário e é considerada uma espécie vulnerável devido à perda de habitat e caça.'
        },

        {
            id: 2,
            nome: 'Onça Parda',
            imagem: require('../../../assets/onca-parda.png'),
            descricao: 'A onça-parda, também conhecida como puma ou leão-da-montanha, é um grande felino encontrado nas Américas. É um predador ágil e adaptável, capaz de viver em uma variedade de habitats, desde florestas até montanhas. A onça-parda é conhecida por sua pelagem uniforme e seu comportamento solitário.'
        },

        {
            id: 3,
            nome: 'Jacaré',
            imagem: require('../../../assets/jacare.png'),
            descricao: 'Os jacarés são grandes répteis encontrados principalmente na América do Sul e Central. Eles são conhecidos por sua pele escamosa, mandíbula poderosa e comportamento semi-aquático. Os jacarés são predadores oportunistas e desempenham um papel importante nos ecossistemas aquáticos.'
        },

        {
            id: 4,
            nome: 'Cagados',
            imagem: require('../../../assets/cagados.png'),
            descricao: 'Os cagados são répteis aquáticos encontrados em várias regiões do mundo. Eles são conhecidos por sua carapaça dura e comportamento semi-aquático. Os cagados são herbívoros e desempenham um papel importante na manutenção dos ecossistemas aquáticos, ajudando a controlar o crescimento de plantas aquáticas.'
        },

        {
            id: 5,
            nome: 'Elefante',
            imagem: require('../../../assets/elefante.png'),
            descricao: 'Os elefantes são os maiores mamíferos terrestres do mundo. Eles são conhecidos por sua inteligência, memória excepcional e comportamento social complexo. Os elefantes desempenham um papel crucial nos ecossistemas, ajudando a moldar o ambiente ao derrubar árvores e criar clareiras.'
        },

        {
            id: 6,
            nome: 'Flamingos',
            imagem: require('../../../assets/flamingo.png'),
            descricao: 'Os flamingos são aves aquáticas conhecidas por sua plumagem rosa vibrante e pernas longas. Eles são encontrados em regiões tropicais e subtropicais, onde se alimentam de pequenos crustáceos e algas. Os flamingos são conhecidos por seus comportamentos sociais, formando grandes colônias.'
        },

        {
            id: 7,
            nome: 'Leão Marinho',
            imagem: require('../../../assets/leao-marinho.png'),
            descricao: 'Os leões marinhos são mamíferos marinhos encontrados em várias regiões costeiras do mundo. Eles são conhecidos por sua pelagem espessa, nadadeiras e comportamento social. Os leões marinhos são predadores ágeis e desempenham um papel importante nos ecossistemas marinhos.'
        },

        {
            id: 8,
            nome: 'Pequenos Felinos',
            imagem: require('../../../assets/pequenos-felinos.png'),
            descricao: 'Os pequenos felinos incluem uma variedade de espécies, como gatos selvagens e linces. Eles são conhecidos por sua agilidade, habilidades de caça e comportamento solitário. Esses felinos desempenham um papel importante nos ecossistemas, ajudando a controlar populações de presas.'
        },
    ];

    return (
      <View style={styles.container}>

          <View style={styles.header}>
            <Animatable.View animation="fadeInLeft" delay={1000}>
                <Pressable onPress={ () => navigation.navigate('Home')}>
                <Image source={require('../../../assets/seta-voltar.png')} style={styles.imgVoltar}/>
                </Pressable>
            </Animatable.View>

            <Text style={styles.titulo}>Território 1</Text>
          </View>
          
          <Animatable.View animation="fadeIn" style={styles.flatlist}>
            <FlatList
                data={dados}
                renderItem={({item}) => (
                <Pressable style={styles.pressable} onPress={() => showModal(item)}>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Image source={item.imagem} style={styles.imagem}/>
                </Pressable>)}
                keyExtractor={(item) => item.id} 
                numColumns={2}       
            />
          </Animatable.View>
          

            <Modal visible={modal} animationType='fade' style={styles.modal}>
                <View style={styles.modal}>
                     <ImageBackground
                         source={require('../../../assets/bg-floresta.jpg')}
                         opacity={0.4}
                        style={styles.background}
                        resizeMode='cover'>
                    {animalSelecionado ? (
                    <>
                     <Pressable onPress={voltar}>
                        <Text style={styles.voltar}>Voltar</Text>
                    </Pressable>
                    <Text style={styles.nomeSelecionado}>{animalSelecionado.nome}</Text>
                    <Image source={animalSelecionado.imagem} style={styles.imagemSelecionado} />
                    <Text style={styles.descSelecionado}>{animalSelecionado.descricao}</Text>
                    </>
                    ) : null}
                    </ImageBackground>
                </View>
            </Modal>
      </View>
    );
  }