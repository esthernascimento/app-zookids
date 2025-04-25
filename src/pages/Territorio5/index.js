import { Text, View } from 'react-native';
import styles from './style';
import { FlatList, Image, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


export default function Territorio5() {
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
          nome: 'Águia',
          imagem: require('../../../assets/aguia.png'),
          descricao: 'A águia é uma ave de rapina conhecida por sua visão aguçada e habilidades de caça. Elas são encontradas em várias partes do mundo e desempenham um papel importante no controle de populações de presas. As águias são símbolos de força e liberdade em muitas culturas.'
        },

        {
            id: 2,
            nome: 'Coruja',
            imagem: require('../../../assets/coruja.png'),
            descricao: 'As corujas são aves noturnas conhecidas por sua capacidade de voar silenciosamente e caçar à noite. Elas têm uma audição aguçada e desempenham um papel importante no controle de populações de roedores. As corujas são frequentemente associadas à sabedoria em várias culturas.'
        },

        {
            id: 3,
            nome: 'Gavião',
            imagem: require('../../../assets/coruja.png'),
            descricao: 'Os gaviões são aves de rapina conhecidas por sua agilidade e habilidades de caça. Eles são encontrados em uma variedade de habitats e desempenham um papel importante no controle de populações de presas. Os gaviões são frequentemente usados em falcoaria e são admirados por sua beleza e força.'
        },

        {
            id: 4,
            nome: 'Harpia',
            imagem: require('../../../assets/harpia.png'),
            descricao: 'A harpia é uma das maiores aves de rapina do mundo, conhecida por suas garras poderosas e habilidades de caça. Elas são encontradas em florestas tropicais e desempenham um papel importante no controle de populações de presas. As harpias são frequentemente consideradas símbolos de força e majestade.'
        },

        {
            id: 5,
            nome: 'Condor',
            imagem: require('../../../assets/condor.png'),
            descricao: 'Os condores são aves de grande porte conhecidas por suas asas largas e capacidade de planar por longas distâncias. Eles são encontrados em regiões montanhosas e desempenham um papel importante na decomposição de carcaças. Os condores são frequentemente considerados símbolos de liberdade e força.'
        },

        {
            id: 6,
            nome: 'Urubu-rei',
            imagem: require('../../../assets/urubu-rei.png'),
            descricao: 'O urubu-rei é uma ave de rapina encontrada na América do Sul, conhecida por sua aparência distinta e comportamento social. Eles desempenham um papel importante na decomposição de carcaças e ajudam a manter o equilíbrio ecológico. O urubu-rei é frequentemente associado à limpeza e renovação.'
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

            <Text style={styles.titulo}>Território 5</Text>
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