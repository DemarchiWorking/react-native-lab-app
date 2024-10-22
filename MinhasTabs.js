import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Publicacao from './src/views/Publicacao';
import Inicio from './src/views/Inicio';
import Perfil from './src/views/Perfil';
import Registrar from './src/views/Registrar';
import Login from './src/views/Login';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import "./global.css"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavInicio from './src/components/MainTabs/NavInicio';
import NavMenu from './src/components/MainTabs/NavMenu';
import NavRelatorio from './src/components/MainTabs/NavRelatorio';
import NavServicos from './src/components/MainTabs/NavServicos';
console.disableYellowBox = true;
//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
 
//const Routes = createAppContainer(createSwitchNavigator({Publicacao}))
export default function MinhasTabs() {
  return (      
      <Tab.Navigator  screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Publicacao" component={NavInicio} />
        <Tab.Screen name="Relatorio" component={NavRelatorio} />
        <Tab.Screen name="Serviços" component={NavServicos} />
        <Tab.Screen name="Menu" component={NavMenu} />
      </Tab.Navigator>  
  );
}



