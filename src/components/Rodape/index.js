import React from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput } from 'react-native';
    
import styles from './styles';
import adicionar from '../../assets/botao-adicionar.png';
import salvar from '../../assets/salve.png';
import { useNavigation } from '@react-navigation/native';

//import save from '../'

export default function Footer({ icon })
{
    const navigation = useNavigation();
    const irParaPublicacao = () => {
        navigation.navigate('CadastrarPublicacao');
      };
    return (
        <View style={styles.lateralDireita}>
            <TouchableOpacity style={styles.button} onPress={irParaPublicacao} >
                <Image style={styles.image} source={ icon == 'add' ? adicionar : salvar} />
            </TouchableOpacity>

            

        </View>
    )
}