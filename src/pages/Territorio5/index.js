import { Text, View } from "react-native";
import styles from "./style";
import { FlatList, Image, Modal, Pressable } from "react-native";
import { useState } from "react";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Territorio5() {
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
      nome: "Águia",
      imagem: require("../../../assets/aguia.png"),
      imagemReal: require("../../../assets/aguia-real.png"),
      descricao:
        "A águia é uma ave de rapina conhecida por sua visão aguçada e habilidades de caça. Elas são encontradas em várias partes do mundo e desempenham um papel importante no controle de populações de presas. As águias são símbolos de força e liberdade em muitas culturas.",
    },

    {
      id: 2,
      nome: "Coruja",
      imagem: require("../../../assets/coruja.png"),
      imagemReal: require("../../../assets/coruja-real.png"),
      descricao:
        "As corujas são aves noturnas conhecidas por sua capacidade de voar silenciosamente e caçar à noite. Elas têm uma audição aguçada e desempenham um papel importante no controle de populações de roedores. As corujas são frequentemente associadas à sabedoria em várias culturas.",
    },

    {
      id: 3,
      nome: "Gavião",
      imagem: require("../../../assets/gaviao.png"),
      imagemReal: require("../../../assets/gaviao-real.png"),
      descricao:
        "Os gaviões são aves de rapina conhecidas por sua agilidade e habilidades de caça. Eles são encontrados em uma variedade de habitats e desempenham um papel importante no controle de populações de presas. Os gaviões são frequentemente usados em falcoaria e são admirados por sua beleza e força.",
    },

    {
      id: 4,
      nome: "Harpia",
      imagem: require("../../../assets/harpia.png"),
      imagemReal: require("../../../assets/harpia-real.png"),
      descricao:
        "A harpia é uma das maiores aves de rapina do mundo, conhecida por suas garras poderosas e habilidades de caça. Elas são encontradas em florestas tropicais e desempenham um papel importante no controle de populações de presas. As harpias são frequentemente consideradas símbolos de força e majestade.",
    },

    {
      id: 5,
      nome: "Condor",
      imagem: require("../../../assets/condor.png"),
      imagemReal: require("../../../assets/condor-real.png"),
      descricao:
        "Os condores são aves de grande porte conhecidas por suas asas largas e capacidade de planar por longas distâncias. Eles são encontrados em regiões montanhosas e desempenham um papel importante na decomposição de carcaças. Os condores são frequentemente considerados símbolos de liberdade e força.",
    },

    {
      id: 6,
      nome: "Urubu-rei",
      imagem: require("../../../assets/urubu-rei.png"),
      imagemReal: require("../../../assets/urubu-rei-real.png"),
      descricao:
        "O urubu-rei é uma ave de rapina encontrada na América do Sul, conhecida por sua aparência distinta e comportamento social. Eles desempenham um papel importante na decomposição de carcaças e ajudam a manter o equilíbrio ecológico. O urubu-rei é frequentemente associado à limpeza e renovação.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.View animation="fadeInRight" delay={1000}>
          <Pressable onPress={() => setMenuVisible(true)}>
            <Image
              source={require("../../../assets/menu.png")} // Ícone do menu hamburguer
              style={styles.menuIcon}
            />
          </Pressable>
        </Animatable.View>

        <Animatable.Text animation="rubberBand" style={styles.titulo}>Território 5</Animatable.Text>
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

            {animalSelecionado ? (
              <>
                <Pressable onPress={() => voltar()}>
                  <Animatable.Image animation={"fadeInLeft"} delay={500}
                    source={require("../../../assets/seta-voltar.png")}
                    style={styles.voltar}
                  />
                </Pressable>
                <Animatable.Text animation="rubberBand" style={styles.nomeSelecionado}>
                  {animalSelecionado.nome}
                </Animatable.Text>
                <Image
                  source={animalSelecionado.imagemReal}
                  style={styles.imagemSelecionado}
                />
                <Text style={styles.descSelecionado}>
                  {animalSelecionado.descricao}
                </Text>
              </>
            ) : null}
          
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
