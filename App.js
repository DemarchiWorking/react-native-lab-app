import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Publicacao from './src/views/Publicacao';
import Inicio from './src/views/Inicio';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import "./global.css"

console.disableYellowBox = true;
const Stack = createNativeStackNavigator();

//const Routes = createAppContainer(createSwitchNavigator({Publicacao}))
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Publicacao" component={Publicacao} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


