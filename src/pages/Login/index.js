import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Text>Tela de Login</Text>
        <Button title='Home' onPress={ () => navigation.navigate('Home')}/>
        <StatusBar style="auto" />
      </View>
    );
  }