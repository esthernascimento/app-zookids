import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const salvarDados = async () => {

      if (!nome || !email || !usuario || !senha || !confirmarSenha) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    return;
  }

    const dadosUsuario = {
      nome,
      email,
      usuario,
      senha,
    };

      try {
      await AsyncStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario))
      alert('Dados salvos com sucesso!');
      navigation.navigate('Login');
    } catch (e) {
      alert('Erro ao salvar os dados');
    }
  };


    return (
          <View style={styles.container}>

              <View style={styles.header}>
                <Image source={require('../../../assets/galhos.png')} style={styles.imgGalhos}/>
              </View>

              <Animatable.View animation="rubberBand" style={styles.containerTitulo}> 
                <Text style={styles.text}>Bem-Vindo(a)!</Text>
                <Text style={styles.text2}>Cadastre-se</Text>
              </Animatable.View>
    
              <View style={styles.containerInput}> 
                <Animatable.View animation="fadeInLeft" delay={1000} style={styles.containerImg}>
                  <Image source={require('../../../assets/bicho-preguica.png')} style={styles.imgPreguica}/>
                </Animatable.View>
                

                  <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={(text) =>setNome(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={(text) =>setEmail(text)}
                  />

                 <TextInput
                  style={styles.input}
                  placeholder="Nome de usuário"
                  value={usuario}
                  onChangeText={(text) =>setUsuario(text)}
                />
      
                  <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(text) =>setSenha(text)}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Confirme sua Senha"
                    secureTextEntry={true}
                    value={confirmarSenha}
                    onChangeText={(text) =>setConfirmarSenha(text)}
                  />
              </View>
    
              
            <Pressable onPress={salvarDados}>
                <Animatable.Text animation="rubberBand" style={styles.btnHome}>Cadastrar</Animatable.Text>
            </Pressable>
            <StatusBar style="auto" />
          </View>
    );
  }