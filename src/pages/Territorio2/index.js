import { Text, View } from "react-native";
import styles from "./style";
import { FlatList, Image, Modal, Pressable } from "react-native";
import { useState } from "react";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Territorio2() {
  const navigation = useNavigation();

  const [modal, setModal] = useState(false);
  const [animalSelecionado, setAnimalSelecionado] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false); // Estado do menu hamburguer

  const showModal = (item) => {
    setAnimalSelecionado(item);
    setModal(true);
  };

      const voltar= () => {
        setModal(false);
        setAnimalSelecionado(null);
    }


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
      nome: "Aves da Mata Atlântica",
      imagem: require("../../../assets/aves-mata-atlantica.png"),
      imagemReal: require("../../../assets/aves-mata-atlantica-real.png"),
      descricao:
        "A Mata Atlântica abriga uma diversidade incrível de aves, incluindo tucanos, araras e beija-flores. Essas aves desempenham papéis importantes na polinização e dispersão de sementes, contribuindo para a saúde do ecossistema.",
    },

    {
      id: 2,
      nome: "Aves da Caatinga",
      imagem: require("../../../assets/aves-caatinga.png"),
      imagemReal: require("../../../assets/aves-caatinga-real.png"),
      descricao:
        "A Caatinga é um bioma exclusivo do Brasil, caracterizado por vegetação xerófila. As aves da Caatinga, como o canário-da-terra e o galo-da-serra, são adaptadas a esse ambiente árido e desempenham papéis importantes na polinização e controle de insetos.",
    },

    {
      id: 3,
      nome: "Aves da Amazônia",
      imagem: require("../../../assets/aves-amazonia.png"),
      imagemReal: require("../../../assets/aves-amazonia-real.png"),
      descricao:
        "A Amazônia é o lar de uma das maiores diversidades de aves do mundo, incluindo araras, tucanos e gaviões. Essas aves desempenham papéis cruciais na polinização, dispersão de sementes e controle de insetos, contribuindo para a saúde do ecossistema.",
    },

    {
      id: 4,
      nome: "Aves do Pantanal",
      imagem: require("../../../assets/aves-pantanal.png"),
      imagemReal: require("../../../assets/aves-pantanal-real.png"),
      descricao:
        "Aves do Pantanal, como o tuiuiú e a garça-branca, são adaptadas a ambientes úmidos e desempenham papéis importantes na polinização e controle de insetos. O Pantanal é um dos maiores ecossistemas alagados do mundo e abriga uma rica diversidade de aves.",
    },

    {
      id: 5,
      nome: "Serpentes",
      imagem: require("../../../assets/serpentes.png"),
      imagemReal: require("../../../assets/serpentes-real.png"),
      descricao:
        "As serpentes são répteis encontrados em uma variedade de habitats, desde florestas até desertos. Elas são conhecidas por sua habilidade de se camuflar e caçar presas. Algumas serpentes são venenosas, enquanto outras são inofensivas. Elas desempenham um papel importante no controle de populações de roedores e insetos.",
    },

    {
      id: 6,
      nome: "Micos",
      imagem: require("../../../assets/micos.png"),
      imagemReal: require("../../../assets/micos-real.png"),
      descricao:
        "Os micos são primatas pequenos encontrados principalmente na América do Sul. Eles são conhecidos por seu comportamento social e vocalizações distintas. Os micos desempenham um papel importante na dispersão de sementes e na polinização de plantas, contribuindo para a saúde dos ecossistemas.",
    },

    {
      id: 7,
      nome: "Anfíbios",
      imagem: require("../../../assets/anfibios.png"),
      imagemReal: require("../../../assets/anfibios-real.png"),
      descricao:
        "Os anfíbios, como sapos e rãs, são animais de pele úmida que vivem tanto na água quanto em terra. Eles desempenham papéis importantes nos ecossistemas aquáticos e terrestres, ajudando a controlar populações de insetos e servindo como indicadores de saúde ambiental.",
    },

    {
      id: 8,
      nome: "Formigueiro",
      imagem: require("../../../assets/formigueiro.png"),
      imagemReal: require("../../../assets/formigueiro-real.png"),
      descricao:
        "Os formigueiros são estruturas construídas por formigas, que são insetos sociais conhecidos por sua organização e trabalho em equipe. Os formigueiros desempenham papéis importantes nos ecossistemas, ajudando a decompor matéria orgânica e controlar populações de insetos.",
    },

    {
      id: 9,
      nome: "Invertebrados",
      imagem: require("../../../assets/invertebrados.png"),
      imagemReal: require("../../../assets/invertebrados-real.png"),
      descricao:
        "Os invertebrados são animais sem coluna vertebral, incluindo insetos, aracnídeos e moluscos. Eles desempenham papéis cruciais nos ecossistemas, como polinizadores, decompositores e presas para outros animais. Os invertebrados são essenciais para a saúde dos ecossistemas.",
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

        <Animatable.Text animation="rubberBand" style={styles.titulo}>Território 2</Animatable.Text>
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
          
            {animalSelecionado ? (
              <>
                <Pressable onPress={() => voltar()}>
                  <Animatable.Image animation="fadeInLeft" delay={500}
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
