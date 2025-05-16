import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Pressable, Modal } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [modal, setModal] = useState(false);
  const [dadosUsuario, setDadosUsuario] = useState(null);

  const recuperarDados = async () => {
    try {
      const usuarioSalvo = await AsyncStorage.getItem('dadosUsuario');

      if (usuarioSalvo !== null) {
        const dadosUsuario = JSON.parse(usuarioSalvo);

        const showModal = () => {
          setModal(true);

           navigation.navigate('Home');
        };

        
      } else {
        alert('Nenhum dado encontrado');
      }
    } catch (e) {
      alert('Erro ao recuperar os dados');
    }
  };
  
    return (
      <View style={styles.container}>

          <View style={styles.header}>
            <Image source={require('../../../assets/galhos.png')} style={styles.imgGalhos}/>
          </View>

          <Animatable.View animation="rubberBand" style={styles.containerTitulo}> 
            <Text style={styles.text}>Bem-Vindo(a) de volta!</Text>
            <Text style={styles.text2}>Faça Login</Text>
          </Animatable.View>

          <View style={styles.containerInput}> 
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={(text) =>setEmail(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              value={senha}
              onChangeText={(text) =>setSenha(text)}
            />
          </View>

          <Animatable.View animation="bounceInDown" delay={1000}>
             <Image source={require('../../../assets/macaco-login.png')} style={styles.imgMacaco}/>
          </Animatable.View>

          
        <Pressable onPress={recuperarDados}>
            <Animatable.Text animation="rubberBand" style={styles.btnHome}>Entrar</Animatable.Text>
        </Pressable>
        <StatusBar style="auto" />

        <Modal visible={modal} animationType='fade'>
            <View style={styles.modal}>
              <Text>(Nome: ${dadosUsuario.nome}, E-mail: ${dadosUsuario.email})</Text>
            </View>
        </Modal>
      </View>
    );
  }