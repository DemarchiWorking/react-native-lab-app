import React from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    Image } from 'react-native';
    
import styles from './styles';
import adicionar from '../../assets/botao-adicionar.png';
import salvar from '../../assets/salve.png';
import Inicio from '../../views/Inicio';
import Menu from '../../views/Menu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavInicio from './NavInicio';
import NavMenu from './NavMenu';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={NavInicio} />
      <Tab.Screen name="Settings" component={NavMenu} />
      </Tab.Navigator>
  );

export default MainTabs;