import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Splash from './src/pages/Splash';
import BemVindo from './src/pages/BemVindo';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Territorio1 from './src/pages/Territorio1';
import Territorio2 from './src/pages/Territorio2';
import Territorio3 from './src/pages/Territorio3';
import Territorio4 from './src/pages/Territorio4';
import Territorio5 from './src/pages/Territorio5';
import Territorio6 from './src/pages/Territorio6';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Territorio1"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BemVindo" component={BemVindo} /> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Territorio1" component={Territorio1} />
        <Stack.Screen name="Territorio2" component={Territorio2} />
        <Stack.Screen name="Territorio3" component={Territorio3} />
        <Stack.Screen name="Territorio4" component={Territorio4} />
        <Stack.Screen name="Territorio5" component={Territorio5} />
        <Stack.Screen name="Territorio6" component={Territorio6} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


