import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Splash() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Animatable.View animation="bounceInDown">
          <Image source={require('../../../assets/capivara-fofa.jpg')} style={styles.img}/>
        </Animatable.View>

         <Pressable onPress={ () => navigation.navigate('BemVindo')}>
            <Text style={styles.btnEntrar}>Entrar</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    );
  }