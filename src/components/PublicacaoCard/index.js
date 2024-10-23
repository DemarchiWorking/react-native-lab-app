import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 

import iconDefault from '../../assets/blog.png'
import fotoPublicacao from '../../assets/rdx.jpg'
import styles from './styles';
export default function PublicacaoCard({ titulo, foto, conteudo, dataPublicacao, concluida })
{
    return (
         <View style={{      flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.card, concluida &&  styles.cartaoFinalizado]}>
            
            <View style={styles.cardEsquerdo}>
                <Image source={iconDefault} style={styles.tipoAtivo}/>
                <ScrollView style={styles.containerLinha}>
    
                <Text style={styles.cardTitulo}> {titulo} </Text>
                <Text> {conteudo} </Text>
                </ScrollView>

                </View>
            <View style={styles.cardDireito}>
                <Text style={styles.cardData}> 01/01/2024 </Text>
                <Text style={styles.cardHora}> 10:00 </Text>
            </View>
            <View style={styles.containerPublicacao}>
                <Image source={fotoPublicacao} style={styles.publicacao} resizeMode="contain"/>
            </View>
             
            <View style={styles.reactions}>
                <TouchableOpacity style={styles.reactionButton}>
                <FontAwesome name="thumbs-o-up" size={24} color="black" />
                <Text style={styles.reactionText}>Curtir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactionButton}>
                <FontAwesome name="comment-o" size={24} color="black" />
                <Text style={styles.reactionText}>Comentar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactionButton}>
                <FontAwesome name="link" size={24} color="black" />
                <Text style={styles.reactionText}>Linkar</Text>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
        </View>
    )
}