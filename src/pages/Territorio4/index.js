import { Text, View } from "react-native";
import styles from "./style";
import { FlatList, Image, Modal, Pressable } from "react-native";
import { useState } from "react";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Territorio4() {
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
      nome: "Rinoceronte",
      imagem: require("../../../assets/rinoceronte.png"),
      descricao:
        "O rinoceronte é um grande mamífero herbívoro encontrado na África e na Ásia. Eles são conhecidos por sua pele grossa e chifres, que são feitos de queratina. Os rinocerontes desempenham um papel importante nos ecossistemas, ajudando a manter a vegetação sob controle.",
    },

    {
      id: 2,
      nome: "Zebra",
      imagem: require("../../../assets/zebra.png"),
      descricao:
        "As zebras são mamíferos herbívoros conhecidos por suas listras pretas e brancas. Elas vivem em manadas e são encontradas principalmente na África. As zebras desempenham um papel importante na manutenção da vegetação e na dispersão de sementes.",
    },

    {
      id: 3,
      nome: "Girafa",
      imagem: require("../../../assets/girafa.png"),
      descricao:
        "As girafas são os animais terrestres mais altos, conhecidas por seus longos pescoços e pernas. Elas se alimentam principalmente de folhas de árvores altas e desempenham um papel importante na polinização e dispersão de sementes.",
    },

    {
      id: 4,
      nome: "Suricato",
      imagem: require("../../../assets/suricato.png"),
      descricao:
        "Os suricatos são pequenos mamíferos sociais encontrados na África. Eles vivem em grupos e são conhecidos por seu comportamento cooperativo, como cuidar dos filhotes e vigiar predadores. Os suricatos desempenham um papel importante no controle de insetos e na manutenção do equilíbrio ecológico.",
    },

    {
      id: 5,
      nome: "Dromedário",
      imagem: require("../../../assets/dromedario.png"),
      descricao:
        "O dromedário, também conhecido como camelo de um corcunda, é um mamífero herbívoro adaptado a ambientes áridos. Eles são conhecidos por sua capacidade de armazenar água e sobreviver em desertos. Os dromedários desempenham um papel importante no transporte de pessoas e mercadorias em regiões desérticas.",
    },

    {
      id: 6,
      nome: "Leão",
      imagem: require("../../../assets/leao.png"),
      descricao:
        "Os leões são grandes felinos encontrados na África e na Ásia. Eles são conhecidos por sua força e comportamento social, vivendo em grupos chamados de alcateias. Os leões desempenham um papel importante como predadores no ecossistema, ajudando a controlar populações de herbívoros.",
    },

    {
      id: 7,
      nome: "Tigre",
      imagem: require("../../../assets/tigre.png"),
      descricao:
        "Tigres são grandes felinos encontrados na Ásia, conhecidos por suas listras distintas e força. Eles são predadores de topo e desempenham um papel crucial no controle de populações de presas. Os tigres são ameaçados devido à perda de habitat e caça ilegal.",
    },

    {
      id: 8,
      nome: "Hipopótamo",
      imagem: require("../../../assets/hipopotamo.png"),
      descricao:
        "O hipopótamo é um grande mamífero semi-aquático encontrado na África. Eles são conhecidos por sua pele grossa e comportamento territorial. Os hipopótamos desempenham um papel importante na manutenção de ecossistemas aquáticos, ajudando a controlar a vegetação e a qualidade da água.",
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

        <Text style={styles.titulo}>Território 4</Text>
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
