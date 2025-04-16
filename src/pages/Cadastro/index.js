import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro() {
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <Text>Tela de Cadastro</Text>
        <Button title='Home' onPress={ () => navigation.navigate('Home')}/>
        <StatusBar style="auto" />
      </View>
    );
  }