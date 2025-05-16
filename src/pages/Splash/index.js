import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import React, { useEffect } from 'react';


export default function Splash() {
    const navigation = useNavigation();

        useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('BemVindo');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
      <View style={styles.container}>
        <Animatable.View animation="bounceInDown">
          <Image source={require('../../../assets/gifCapivara.gif')} style={styles.img}/>
          <Image source={require('../../../assets/carregando.gif')} style={styles.carregando}/>
        </Animatable.View>


        <StatusBar style="auto" />
      </View>
    );
  }