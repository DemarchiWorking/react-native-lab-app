import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './styles';

import logo from '../../assets/logo.jpg';
import sino from '../../assets/sino.png';
import voltar from '../../assets/costas.png';

export default function Header({ mostrarNotificacao, mostrarVoltar, mostrarLogin})
{
    return (
        <View style={ styles.header}>
            <TouchableOpacity>
                <Image style={ styles.logo} source={logo}/>
            </TouchableOpacity>
            
            {mostrarNotificacao ?
                <TouchableOpacity style={styles.notificacao}>
                    <Image style={ styles.sino} source={sino}/>
                    <View style={styles.circulo}>
                        <Text style={ styles.notificacaoText}> 3 </Text>

                    </View>
                </TouchableOpacity> 
                :
                <TouchableOpacity style={styles.notificacao}>
                    <Image style={ styles.sino} source={voltar}/>
                    <View style={styles.circulo}>
                        
                    </View>
                </TouchableOpacity>
            }
            

            <Text>  </Text>
        </View>
    )
}