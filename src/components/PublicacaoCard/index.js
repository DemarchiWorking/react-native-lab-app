import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'

import iconDefault from '../../assets/blog.png'
import styles from './styles';
export default function PublicacaoCard()
{
    return (
        <TouchableOpacity>
        <View style={ styles.header}>
            <Image source={iconDefault} style={styles.tipoAtivo}/>
            <Text> Projeto </Text>
        </View>
        </TouchableOpacity>
    )
}