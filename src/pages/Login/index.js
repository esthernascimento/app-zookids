import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, Pressable } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';


export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
    return (
      <View style={styles.container}>
          <View style={styles.containerTitulo}> 
            <Text style={styles.text}>Bem-Vindo(a) de volta!</Text>
            <Text style={styles.text2}>Faça Login</Text>
          </View>

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

          
        <Pressable onPress={ () => navigation.navigate('Home')}>
            <Text style={styles.btnHome}>Entrar</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    );
  }