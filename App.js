import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Publicacao from './src/views/Publicacao';
import Inicio from './src/views/Inicio';
import Perfil from './src/views/Perfil';
import Registrar from './src/views/Registrar';
import Login from './src/views/Login';
import Notificacao from './src/views/Notificacao'
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import "./global.css"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MinhasTabs from './MinhasTabs';
import Loja from './src/views/Loja';
console.disableYellowBox = true;

//const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

 
//const Routes = createAppContainer(createSwitchNavigator({Publicacao}))
const App = () => (
    <> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={MinhasTabs} />
          <Stack.Screen name="CadastrarPublicacao" component={Publicacao} />
          <Stack.Screen name="Perfil" component={Perfil} />
          <Stack.Screen name="Notificacao" component={Notificacao} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registrar" component={Registrar} />
          <Stack.Screen name="Loja" component={Loja} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );

export default App;


