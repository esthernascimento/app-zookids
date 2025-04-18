import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, ImageBackground, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function BemVindo() {
    const navigation = useNavigation();
    
    return (
      <View style={styles.container}>
        <ImageBackground
            source={require('../../../assets/bg-zoo.jpg')}
            style={styles.background}
            resizeMode='cover'>

          <Animatable.View animation="bounceInDown" delay={1000} style={styles.titulo}>
            <Image source={require('../../../assets/macaco-fofo.png')} style={styles.img}/>
          </Animatable.View>

          <Animatable.View animation="bounceInUp" delay={2000}>
            <Image source={require('../../../assets/bemvindo.png')} style={styles.img2}/>
          </Animatable.View>
          
          <View style={styles.botoes}>
              <Pressable onPress={ () => navigation.navigate('Login')}>
                  <Animatable.Text animation="bounceInLeft" delay={3000} style={styles.btn}>Login</Animatable.Text>
               </Pressable>
               <Pressable onPress={ () => navigation.navigate('Cadastro')}>
                  <Animatable.Text animation="bounceInRight" delay={4000} style={styles.btn}>Cadastro</Animatable.Text>
               </Pressable>
          </View>

        </ImageBackground>
        
        
        <StatusBar style="auto" />
      </View>
    );
  }