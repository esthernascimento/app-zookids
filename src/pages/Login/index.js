import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')
  
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Faça seu Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            value={email}
            onChangeText={(text) =>setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            keyboardType='password'
            value={senha}
            onChangeText={(text) =>setSenha(text)}
          />
        <Button title='Home' onPress={ () => navigation.navigate('Home')}/>
        <StatusBar style="auto" />
      </View>
    );
  }