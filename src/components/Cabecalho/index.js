import React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native'

import styles from './styles';

import logo from '../../assets/logo.jpg';
import sino from '../../assets/sino.png';
import voltar from '../../assets/costas.png';
import { useNavigation } from '@react-navigation/native';

export default function Header({ mostrarNotificacao, mostrarVoltar, mostrarLogin})
{
    const navigation = useNavigation();
    const irParaInicio = () => {
    navigation.navigate('Inicio');
  };
    return (
        <View style={ styles.header}>

            <TouchableOpacity>
                <Image style={ styles.logo} onPress={irParaInicio} source={logo}/>
            </TouchableOpacity>
            
            {mostrarNotificacao ?
                <TouchableOpacity style={styles.notificacao}>
                    <Image style={styles.sino} source={sino}/>
                    <View style={styles.circulo}>
                        <Text style={ styles.notificacaoText}> 3 </Text>

                    </View>
                </TouchableOpacity> 
                :
                <TouchableOpacity style={styles.notificacao} onPress={irParaInicio} >
                    <Image style={styles.sino} source={voltar}/>
                    <View style={styles.circulo}>
                    </View>
                </TouchableOpacity>
            }
            

            <Text>  </Text>
        </View>
    )
}