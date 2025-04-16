import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './style';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Imagem da tartaruga com capivara!!!</Text>
        <Button title='Entrar' onPress={ () => navigation.navigate('BemVindo')}/>
        <StatusBar style="auto" />
      </View>
    );
  }