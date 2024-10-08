import React from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    Image } from 'react-native';
    
import styles from './styles';
import adicionar from '../../assets/botao-adicionar.png';
import salvar from '../../assets/salve.png';

//import save from '../'

export default function Footer({ icon })
{
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.image} source={ icon == 'add' ? adicionar : salvar} />
            </TouchableOpacity>

            <Text style={styles.text}>
                Lista de Desenvolvedorrrrr
            </Text>
        </View>
    )
}