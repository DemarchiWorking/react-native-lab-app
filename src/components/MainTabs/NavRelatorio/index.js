import React from 'react';
import ProdutoCard from '../../../components/ProdutoCard'
import styles from './styles';
import { ScrollView, View, Image, Text } from 'react-native';
import Header from '../../Cabecalho';

export default function NavRelatorio()
{
 
 

    return (
        <View style={styles.container}>
            <Header mostrarNotificacao={true}/>
        
            <ProdutoCard></ProdutoCard>
        </View>
    )
}