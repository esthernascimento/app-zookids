import { Text, View } from 'react-native';
import styles from './style';
import { FlatList, Image, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


export default function Territorio2() {
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
          nome: 'Aves da Mata Atlântica',
          imagem: require('../../../assets/aves-mata-atlantica.png'),
          descricao: 'A Mata Atlântica abriga uma diversidade incrível de aves, incluindo tucanos, araras e beija-flores. Essas aves desempenham papéis importantes na polinização e dispersão de sementes, contribuindo para a saúde do ecossistema.'
        },

        {
            id: 2,
            nome: 'Aves da Caatinga',
            imagem: require('../../../assets/aves-caatinga.png'),
            descricao: 'A Caatinga é um bioma exclusivo do Brasil, caracterizado por vegetação xerófila. As aves da Caatinga, como o canário-da-terra e o galo-da-serra, são adaptadas a esse ambiente árido e desempenham papéis importantes na polinização e controle de insetos.'
        },

        {
            id: 3,
            nome: 'Aves da Amazônia',
            imagem: require('../../../assets/aves-amazonia.png'),
            descricao: 'A Amazônia é o lar de uma das maiores diversidades de aves do mundo, incluindo araras, tucanos e gaviões. Essas aves desempenham papéis cruciais na polinização, dispersão de sementes e controle de insetos, contribuindo para a saúde do ecossistema.'
        },

        {
            id: 4,
            nome: 'Aves do Pantanal',
            imagem: require('../../../assets/aves-pantanal.png'),
            descricao: 'Aves do Pantanal, como o tuiuiú e a garça-branca, são adaptadas a ambientes úmidos e desempenham papéis importantes na polinização e controle de insetos. O Pantanal é um dos maiores ecossistemas alagados do mundo e abriga uma rica diversidade de aves.'
        },

        {
            id: 5,
            nome: 'Serpentes',
            imagem: require('../../../assets/serpentes.png'),
            descricao: 'As serpentes são répteis encontrados em uma variedade de habitats, desde florestas até desertos. Elas são conhecidas por sua habilidade de se camuflar e caçar presas. Algumas serpentes são venenosas, enquanto outras são inofensivas. Elas desempenham um papel importante no controle de populações de roedores e insetos.'
        },

        {
            id: 6,
            nome: 'Micos',
            imagem: require('../../../assets/micos.png'),
            descricao: 'Os micos são primatas pequenos encontrados principalmente na América do Sul. Eles são conhecidos por seu comportamento social e vocalizações distintas. Os micos desempenham um papel importante na dispersão de sementes e na polinização de plantas, contribuindo para a saúde dos ecossistemas.'
        },

        {
            id: 7,
            nome: 'Anfíbios',
            imagem: require('../../../assets/anfibios.png'),
            descricao: 'Os anfíbios, como sapos e rãs, são animais de pele úmida que vivem tanto na água quanto em terra. Eles desempenham papéis importantes nos ecossistemas aquáticos e terrestres, ajudando a controlar populações de insetos e servindo como indicadores de saúde ambiental.'
        },

        {
            id: 8,
            nome: 'Formigueiro',
            imagem: require('../../../assets/formigueiro.png'),
            descricao: 'Os formigueiros são estruturas construídas por formigas, que são insetos sociais conhecidos por sua organização e trabalho em equipe. Os formigueiros desempenham papéis importantes nos ecossistemas, ajudando a decompor matéria orgânica e controlar populações de insetos.'
        },

        {
            id: 9,
            nome: 'Invertebrados',
            imagem: require('../../../assets/formigueiro.png'),
            descricao: 'Os invertebrados são animais sem coluna vertebral, incluindo insetos, aracnídeos e moluscos. Eles desempenham papéis cruciais nos ecossistemas, como polinizadores, decompositores e presas para outros animais. Os invertebrados são essenciais para a saúde dos ecossistemas.'
        },
    ];

    return (
      <View style={styles.container}>

          <Animatable.View animation="fadeInLeft">
            <Pressable onPress={ () => navigation.navigate('Home')}>
              <Image source={require('../../../assets/voltar.png')} style={styles.imgVoltar}/>
            </Pressable>
          </Animatable.View>

          <Text style={styles.titulo}>Território 2</Text>
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