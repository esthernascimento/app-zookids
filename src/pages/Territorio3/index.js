import { Text, View } from "react-native";
import styles from "./style";
import { FlatList, Image, Modal, Pressable } from "react-native";
import { useState } from "react";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Territorio3() {
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
      nome: "Mamíferos do Cerrado",
      imagem: require("../../../assets/mamiferos-do-cerrado.png"),
      descricao:
        "A diversidade de mamíferos do Cerrado inclui espécies como o lobo-guará, a anta e o tamanduá-bandeira. Esses mamíferos desempenham papéis importantes na polinização, dispersão de sementes e controle de populações de insetos.",
    },

    {
      id: 2,
      nome: "Urso-de-óculos",
      imagem: require("../../../assets/urso-de-oculos.png"),
      descricao:
        "O urso-de-óculos, também conhecido como urso-andino, é uma espécie ameaçada encontrada nas montanhas da América do Sul. Ele é conhecido por seu rosto distintivo e hábitos alimentares variados, incluindo frutas e folhas. O urso-de-óculos desempenha um papel importante na dispersão de sementes.",
    },

    {
      id: 3,
      nome: "Dinossauros",
      imagem: require("../../../assets/dinossauro.png"),
      descricao:
        "Os dinossauros foram um grupo diversificado de répteis que dominaram a Terra durante a Era Mesozoica. Eles variavam em tamanho e forma, desde pequenos dinossauros bípedes até enormes herbívoros.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.View animation="fadeInLeft" delay={1000}>
          <Pressable onPress={() => setMenuVisible(true)}>
            <Image
              source={require("../../../assets/menu.png")} // Ícone do menu hamburguer
              style={styles.menuIcon}
            />
          </Pressable>
        </Animatable.View>

        <Text style={styles.titulo}>Território 3</Text>
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
          keyExtractor={(item) => item.id}
        />
      </Animatable.View>

      <Modal visible={modal} animationType="fade" style={styles.modal}>
        <View style={styles.modal}>
          <ImageBackground
            source={require("../../../assets/bg-safari.jpg")}
            opacity={0.2}
            style={styles.background}
            resizeMode="stretch"
          >
            {animalSelecionado ? (
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
                  source={animalSelecionado.imagem}
                  style={styles.imagemSelecionado}
                />
                <Text style={styles.descSelecionado}>
                  {animalSelecionado.descricao}
                </Text>
              </>
            ) : null}
          </ImageBackground>
        </View>
      </Modal>

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
