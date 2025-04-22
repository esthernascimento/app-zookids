import { Text, View } from 'react-native';
import styles from './style';
import { FlatList, Image, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


export default function Territorio3() {
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
          nome: 'Mamíferos do Cerrado',
          imagem: require('../../../assets/mamiferos-do-cerrado.png'),
          descricao: 'A diversidade de mamíferos do Cerrado inclui espécies como o lobo-guará, a anta e o tamanduá-bandeira. Esses mamíferos desempenham papéis importantes na polinização, dispersão de sementes e controle de populações de insetos.'
        },

        {
            id: 2,
            nome: 'Urso-de-óculos',
            imagem: require('../../../assets/urso-de-oculos.png'),
            descricao: 'O urso-de-óculos, também conhecido como urso-andino, é uma espécie ameaçada encontrada nas montanhas da América do Sul. Ele é conhecido por seu rosto distintivo e hábitos alimentares variados, incluindo frutas e folhas. O urso-de-óculos desempenha um papel importante na dispersão de sementes.'
        },

        {
            id: 3,
            nome: 'Dinossauros',
            imagem: require('../../../assets/dinossauro.png'),
            descricao: 'Os dinossauros foram um grupo diversificado de répteis que dominaram a Terra durante a Era Mesozoica. Eles variavam em tamanho e forma, desde pequenos dinossauros bípedes até enormes herbívoros. Os dinossauros desempenharam papéis importantes nos ecossistemas pré-históricos e sua extinção abriu caminho para o surgimento de mamíferos.'
        },

    ];

    return (
      <View style={styles.container}>

          <Animatable.View animation="fadeInLeft">
            <Pressable onPress={ () => navigation.navigate('Home')}>
              <Image source={require('../../../assets/voltar.png')} style={styles.imgVoltar}/>
            </Pressable>
          </Animatable.View> 

          <Text style={styles.titulo}>Território 3</Text>
          <FlatList
              data={dados}
              renderItem={({item}) => (
              <Pressable style={styles.pressable} onPress={() => showModal(item)}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Image source={item.imagem} style={styles.imagem}/>
              </Pressable>)}
              keyExtractor={(item) => item.id}        
          />

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