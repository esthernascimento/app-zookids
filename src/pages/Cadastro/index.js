import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';


export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

    return (
          <View style={styles.container}>

              <Animatable.View animation="fadeInLeft">
                  <Pressable onPress={ () => navigation.navigate('BemVindo')}>
                   <Image source={require('../../../assets/voltar.png')} style={styles.imgVoltar}/>
                  </Pressable>
              </Animatable.View>

              <View style={styles.containerTitulo}> 
                <Text style={styles.text}>Bem-Vindo(a)!</Text>
                <Text style={styles.text2}>Cadastre-se</Text>
              </View>
    
              <View style={styles.containerInput}> 

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
    
              
            <Pressable onPress={ () => navigation.navigate('Home')}>
                <Text style={styles.btnHome}>Cadastrar</Text>
            </Pressable>
            <StatusBar style="auto" />
          </View>
    );
  }