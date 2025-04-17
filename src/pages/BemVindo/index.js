import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, ImageBackground } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function BemVindo() {
    const navigation = useNavigation();
    
    return (
      <View style={styles.container}>
        <ImageBackground
            source={require('../../../assets/bg-floresta.jpg')}
            opacity={0.4}
            style={styles.background}
            resizeMode='cover'>

          <View style={styles.titulo}>
            <Text style={styles.text}>Seja Bem vindo(a) ao App Zookids!!!</Text>
            <Text style={styles.text}>Faça Login ou Cadastre-se para para entrar nessa aventura!</Text>
          </View>
          
          <View style={styles.botoes}>
              <Button title='Login' onPress={ () => navigation.navigate('Login')}/>
              <Button title='Cadastre-se' onPress={ () => navigation.navigate('Cadastro')}/>
          </View>

        </ImageBackground>
        
        
        <StatusBar style="auto" />
      </View>
    );
  }