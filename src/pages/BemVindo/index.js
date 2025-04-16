import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function BemVindo() {
    const navigation = useNavigation();
    
    return (
      <View style={styles.container}>
        <Text>Tela da girafa</Text>

        <View style={styles.botoes}>
            <Button title='Login' onPress={ () => navigation.navigate('Login')}/>
            <Button title='Cadastre-se' onPress={ () => navigation.navigate('Cadastro')}/>
        </View>
        
        <StatusBar style="auto" />
      </View>
    );
  }