import React, { useState, useCallback } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import iconDefault from '../../assets/blog.png'
import fotoPublicacao from '../../assets/rdx.jpg'
import styles from './styles';
import { FIREBASE_APP, FIRESTORE_DB } from '../../../FirebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { useFocusEffect } from '@react-navigation/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

export default function NegocioCard()
{
    const [negocios, setNegocios] = useState([]);
    const navigation = useNavigation();

    const irParaLoja = () => {
        navigation.navigate('Loja');
      };
    const getNegocios = () => {
        const q = query(collection(FIRESTORE_DB, 'negocios'), orderBy('dataPublicacao', 'desc')); // Ordenar por dataPublicacao em ordem decrescente
        getDocs(q).then((querySnapshot) => {
        const negociosList = [];
        querySnapshot.forEach((doc) => {
            negociosList.push({ id: doc.id, ...doc.data() });
        });
        setNegocios(negociosList);
        }).catch((error) => {
        //console.error('Erro ao obter documentos: ', error);
        });
    };
    
    // Use useFocusEffect para chamar getPublicacoes sempre que a tela for focada
    useFocusEffect(
        useCallback(() => {
            getNegocios();
        }, [])
    );
    
    return (
         <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                {negocios.map((loja, index) => (
                <TouchableOpacity onPress={irParaLoja}>
                   <View key={index} style={styles.avatarContainer}>
                   <Image source={{ uri: loja.foto }} style={styles.avatar} />
                   <Text style={styles.text}>{loja.nome.substring(0,10)}</Text>
                 </View>
                </TouchableOpacity>
                   
                ))}
                </ScrollView>
        </View>
    )
}    
