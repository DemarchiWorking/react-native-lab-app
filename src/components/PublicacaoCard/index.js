import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

import iconDefault from '../../assets/blog.png'
import styles from './styles';
export default function PublicacaoCard({ titulo, foto, conteudo, dataPublicacao, concluida })
{
    return (
        <TouchableOpacity style={[styles.card, concluida &&  styles.cartaoFinalizado]}>
        <View style={styles.cardEsquerdo}>
            <Image source={iconDefault} style={styles.tipoAtivo}/>
            <ScrollView style={styles.containerLinha}>
   
            <Text style={styles.cardTitulo}> {titulo} </Text>
            <Text> {conteudo} </Text>
            </ScrollView>

            </View>
        <View style={styles.cardDireito}>
            <Text style={styles.cardData}> {dataPublicacao} </Text>
            <Text style={styles.cardHora}> 10:00 </Text>
        </View>
        </TouchableOpacity>
    )
}