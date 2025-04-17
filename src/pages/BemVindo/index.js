import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function BemVindo() {
    const navigation = useNavigation();
    
    return (
      <View style={styles.container}>
        <ImageBackground
            source={require('../../../assets/bg-floresta.jpg')}
            opacity={0.4}
            style={styles.background}
            resizeMode='cover'>

          <Animatable.View animation="rubberBand" style={styles.titulo}>
            <Text style={styles.text}>Seja Bem vindo(a) ao App Zookids!!!</Text>
            <Text style={styles.text}>Faça Login ou Cadastre-se para para entrar nessa aventura!</Text>
          </Animatable.View>
          
          <View style={styles.botoes}>
              <Pressable onPress={ () => navigation.navigate('Login')}>
                  <Animatable.Text animation="bounceInLeft" delay={1000} style={styles.btn}>Login</Animatable.Text>
               </Pressable>
               <Pressable onPress={ () => navigation.navigate('Cadastro')}>
                  <Animatable.Text animation="bounceInRight" delay={2000} style={styles.btn}>Cadastro</Animatable.Text>
               </Pressable>
          </View>

        </ImageBackground>
        
        
        <StatusBar style="auto" />
      </View>
    );
  }