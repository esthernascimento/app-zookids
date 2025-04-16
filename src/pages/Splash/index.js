import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from './style';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/capivara-fofa.jpg')} style={styles.img}/>
        <Button title='Entrar' onPress={ () => navigation.navigate('BemVindo')}/>
        <StatusBar style="auto" />
      </View>
    );
  }