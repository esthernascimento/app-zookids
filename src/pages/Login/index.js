import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, Pressable } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';


export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')
  
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Faça seu Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            value={email}
            onChangeText={(text) =>setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) =>setSenha(text)}
          />
        <Pressable onPress={ () => navigation.navigate('Home')}>
            <Text style={styles.btnHome}>Home</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    );
  }