import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-web';
import { ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';


export default function Home() {
  const navigation = useNavigation();

  const territorios = [
    {
      id: 1,
      nomeTerritorio: 'Território 1',
      imagem: require('../../../assets/bg-territorio1.png'),
      animais: ['Onça Pintada', 'Onça Parda', 'Jacaré', 'Cagados', 'Elefante', 'Flamingos', 'Leão Marinho', 'Pequenos felinos'],
    },

    {
      id: 2,
      nomeTerritorio: 'Território 2',
      imagem: require('../../../assets/bg-territorio2.png'),
      animais: ['Aves da Mata Atlântica', 'Aves da Caatinga', 'Aves da Amazônia', 'Aves do Pantanal', 'Serpentes', 'Micos', 'Anfíbios', 'Formigueiro', 'Invertebrados'],
    },

    {
      id: 3,
      nomeTerritorio: 'Território 3',
      imagem: require('../../../assets/bg-territorio3.png'),
      animais: ['Mamíferos do Cerrado', 'Urso-de-óculos', 'Dinossauros'],
    },

    {
      id: 4,
      nomeTerritorio: 'Território 4',
      imagem: require('../../../assets/bg-territorio4.png'),
      animais: ['Rinoceronte', 'Zebra', 'Girafa', 'Suricato', 'Dromedário', 'Leão', 'Tigre', 'Hipopótamo'],
    },

    {
      id: 5,
      nomeTerritorio: 'Território 5',
      imagem: require('../../../assets/bg-territorio5.png'),
      animais: ['Águias', 'Corujas', 'Gaviões', 'Harpia', 'Condor', 'Urubu-rei'],
    },

    {
      id: 6,
      nomeTerritorio: 'Território 6',
      imagem: require('../../../assets/bg-territorio6.png'),
      animais: ['Lontra', 'Chimpanzé', 'Orangotango', 'Primatas Brasileiros', 'Muriqui-do-sul'],
    },
  ];
    
    return (
      <View style={styles.container}>
          <ImageBackground
             source={require('../../../assets/bg-floresta.jpg')}
             opacity={0.4}
             style={styles.background}
             resizeMode='cover'>

          <Animatable.View animation="fadeInLeft">
            <Pressable onPress={ () => navigation.navigate('BemVindo')}>
              <Image source={require('../../../assets/seta-voltar.png')} style={styles.imgVoltar}/>
            </Pressable>
          </Animatable.View>

          <Animatable.View animation="rubberBand" style={styles.containerTitulo}>
            <Text style={styles.titulo}>Territórios</Text>
            <Text style={styles.titulo2}>Clique em qual Território</Text>
            <Text style={styles.titulo2}>deseja explorar!</Text>
         </Animatable.View>
        
         <FlatList
         style={styles.flatList}
          data={territorios}
          renderItem={({ item, index }) => (
            <Pressable 
            onPress={() => navigation.navigate(`Territorio${item.id}`)}
             style={styles.item}>
              <ImageBackground
                source={item.imagem}
                resizeMode="stretch"
                style={styles.background}
              >
                <View style={styles.containerNomeTerritorio}>
                   <Text style={styles.nomeTerritorio}> {item.nomeTerritorio}</Text>
                </View>
                <View style={styles.containerAnimais}>
                  {item.animais.map((animal, index) => (
                    <Text key={index} style={styles.texto}>{animal}</Text>
                  ))}
                </View>
                
              </ImageBackground>
            </Pressable>)}
            keyExtractor={(item) => item.id}
            numColumns={2}         
         />    

        </ImageBackground>
        
      </View> 
    );
  };