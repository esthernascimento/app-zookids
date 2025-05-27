import {
  Text,
  View,
  FlatList,
  Image,
  Modal,
  Pressable,
  ImageBackground,
} from "react-native";
import styles from "./style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Territorio1() {
  const navigation = useNavigation();

  const [modal, setModal] = useState(false);
  const [animalSelecionado, setAnimalSelecionado] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false); // Estado do menu hamburguer

  const showModal = (item) => {
    setAnimalSelecionado(item);
    setModal(true);
  };

  const voltar = () => {
    setModal(false);
    setAnimalSelecionado(null);
  };

  const sair = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Dados limpos com sucesso!");
      navigation.navigate("Splash");
    } catch (error) {
      console.error("Erro ao limpar os dados:", error);
    }
  };

  const dados = [
    {
      id: 1,
      nome: "Onça Pintada",
      imagem: require("../../../assets/onca-pintada.png"),
      imagemReal: require("../../../assets/oncaPintada-real.png"),
      descricao:
                "A onça-pintada é um grande felino encontrado na América do Sul e Central. É conhecida por sua pelagem amarelada com manchas escuras, que a ajuda a se camuflar na floresta. A onça-pintada é um predador solitário e é considerada uma espécie vulnerável devido à perda de habitat e caça.",
    },

    {
      id: 2,
      nome: "Onça Parda",
      imagem: require("../../../assets/onca-parda.png"),
      imagemReal: require("../../../assets/oncaParda-real.png"),
      descricao:
        "A onça-parda, também conhecida como puma ou leão-da-montanha, é um grande felino encontrado nas Américas. É um predador ágil e adaptável, capaz de viver em uma variedade de habitats, desde florestas até montanhas.",
    },
    {
      id: 3,
      nome: "Jacaré",
      imagem: require("../../../assets/jacare.png"),
      imagemReal: require("../../../assets/jacare-real.png"),
      descricao:
        "Os jacarés são grandes répteis encontrados principalmente na América do Sul e Central. Eles são conhecidos por sua pele escamosa, mandíbula poderosa e comportamento semi-aquático. Os jacarés são predadores oportunistas e desempenham um papel importante nos ecossistemas aquáticos.",
    },
    {
      id: 4,
      nome: "Cagados",
      imagem: require("../../../assets/cagados.png"),
      imagemReal: require("../../../assets/cagado-real.png"),
      descricao:
        "Os cagados são répteis aquáticos. Eles são conhecidos por sua carapaça dura e comportamento semi-aquático. Os cagados são herbívoros e desempenham um papel importante na manutenção dos ecossistemas aquáticos, ajudando a controlar o crescimento de plantas aquáticas.",
    },
    {
      id: 5,
      nome: "Elefante",
      imagem: require("../../../assets/elefante.png"),
      imagemReal: require("../../../assets/elefante-real.png"),
      descricao:
        "Os elefantes são os maiores mamíferos terrestres do mundo. Eles são conhecidos por sua inteligência, memória excepcional e comportamento social complexo. Os elefantes desempenham um papel crucial nos ecossistemas, ajudando a moldar o ambiente ao derrubar árvores e criar clareiras.",
    },
    {
      id: 6,
      nome: "Flamingos",
      imagem: require("../../../assets/flamingo.png"),
      imagemReal: require("../../../assets/flamingo-real.png"),
      descricao:
         "Os flamingos são aves aquáticas conhecidas por sua plumagem rosa vibrante e pernas longas. Eles são encontrados em regiões tropicais e subtropicais, onde se alimentam de pequenos crustáceos e algas.",
    },
    {
      id: 7,
      nome: "Leão Marinho",
      imagem: require("../../../assets/leao-marinho.png"),
      imagemReal: require("../../../assets/leao-marinho-real.png"),
      descricao:
         "Os leões marinhos são mamíferos marinhos encontrados em várias regiões costeiras do mundo. Eles são conhecidos por sua pelagem espessa, nadadeiras e comportamento social. Os leões marinhos são predadores ágeis e desempenham um papel importante nos ecossistemas marinhos.",
    },
    {
      id: 8,
      nome: "Pequenos Felinos",
      imagem: require("../../../assets/pequenos-felinos.png"),
      imagemReal: require("../../../assets/pequenos-felinos-real.png"),
      descricao:
        "Os pequenos felinos incluem uma variedade de espécies, como gatos selvagens e linces. Eles são conhecidos por sua agilidade, habilidades de caça e comportamento solitário. Esses felinos desempenham um papel importante nos ecossistemas, ajudando a controlar populações de presas.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.View animation="fadeInLeft" delay={500}>
          <Pressable onPress={() => setMenuVisible(true)}>
            <Image
              source={require("../../../assets/menu.png")} // Ícone do menu hamburguer
              style={styles.menuIcon}
            />
          </Pressable>
          <Text style={styles.titulo}>Território 1</Text>
        </Animatable.View>
      </View>

      <Animatable.View animation="fadeIn" style={styles.flatlist}>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <Pressable style={styles.pressable} onPress={() => showModal(item)}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Image source={item.imagem} style={styles.imagem} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </Animatable.View>

  
      <Modal visible={modal} animationType="fade">
        <View style={styles.modal}>
          
            {animalSelecionado && (
              <>
                <Pressable onPress={() => voltar()}>
                  <Image
                    source={require("../../../assets/seta-voltar.png")}
                    style={styles.voltar}
                  />
                </Pressable>
                <Text style={styles.nomeSelecionado}>
                  {animalSelecionado.nome}
                </Text>
                <Image
                  source={animalSelecionado.imagemReal}
                  style={styles.imagemSelecionado}
                />
                <Text style={styles.descSelecionado}>
                  {animalSelecionado.descricao}
                </Text>
              </>
            )}
         
        </View>
      </Modal>

      {/* Modal do Menu Hamburguer */}
      <Modal visible={menuVisible} transparent={true} animationType="fade">
        <Pressable
          style={styles.menuOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <Pressable style={styles.menuContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.menuOptionPressable,
                pressed && styles.menuOptionPressableHover,
              ]}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.menuOption}>Home</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.menuOptionPressable,
                pressed && styles.menuOptionPressableHover,
              ]}
              onPress={() => {
                setMenuVisible(false);
                sair();
              }}
            >
              <Text style={styles.menuOptionLogout}>Sair</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
