import { Text, View } from "react-native";
import styles from "./style";
import { FlatList, Image, Modal, Pressable } from "react-native";
import { useState } from "react";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Territorio6() {
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
      nome: "Lontra",
      imagem: require("../../../assets/lontra.png"),
      descricao:
        "A lontra é um mamífero aquático encontrado em rios e lagos. Elas são conhecidas por sua agilidade na água e habilidades de caça. As lontras desempenham um papel importante no ecossistema aquático, ajudando a controlar populações de peixes e invertebrados.",
    },

    {
      id: 2,
      nome: "Chimpanzé",
      imagem: require("../../../assets/chimpanze.png"),
      descricao:
        "Os chimpanzés são primatas altamente inteligentes e sociais encontrados nas florestas tropicais da África. Eles são conhecidos por suas habilidades de comunicação e uso de ferramentas. Os chimpanzés desempenham um papel importante na dispersão de sementes e na manutenção da biodiversidade.",
    },

    {
      id: 3,
      nome: "Orangotango",
      imagem: require("../../../assets/orangotango.png"),
      descricao:
        "Orangotangos são primatas arborícolas encontrados nas florestas tropicais da Indonésia e Malásia. Eles são conhecidos por sua inteligência e habilidades de escalada. Os orangotangos desempenham um papel importante na dispersão de sementes e na manutenção da biodiversidade das florestas.",
    },

    {
      id: 4,
      nome: "Primatas Brasileiros",
      imagem: require("../../../assets/primatas-brasileiros.png"),
      descricao:
        "Os primatas brasileiros incluem espécies como o mico-leão-dourado e o bugio. Eles são conhecidos por sua diversidade e adaptabilidade a diferentes habitats. Os primatas desempenham papéis importantes na polinização, dispersão de sementes e controle de insetos.",
    },

    {
      id: 5,
      nome: "Muriqui-do-sul",
      imagem: require("../../../assets/muriqui-do-sul.png"),
      descricao:
        "O muriqui-do-sul, também conhecido como muriqui-de-cara-preta, é um primata ameaçado encontrado nas florestas tropicais do Brasil. Eles são conhecidos por sua dieta variada e comportamento social. O muriqui-do-sul desempenha um papel importante na dispersão de sementes e na manutenção da biodiversidade.",
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

        <Text style={styles.titulo}>Território 6</Text>
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
          numColumns={2}
          centerContent={true}
          contentContainerStyle={{ alignItems: "center" }}
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
