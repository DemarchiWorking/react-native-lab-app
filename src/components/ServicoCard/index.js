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

export default function ServicoCard()
{
    const [servicos, setServicos] = useState([]);
    const getServicos = () => {
        const q = query(collection(FIRESTORE_DB, 'servicos'), orderBy('dataPublicacao', 'desc')); // Ordenar por dataPublicacao em ordem decrescente
        getDocs(q).then((querySnapshot) => {
        const servicosList = [];
        querySnapshot.forEach((doc) => {
            servicosList.push({ id: doc.id, ...doc.data() });
        });
        setServicos(servicosList);
        }).catch((error) => {
        //console.error('Erro ao obter documentos: ', error);
        });
    };
    
    // Use useFocusEffect para chamar getPublicacoes sempre que a tela for focada
    useFocusEffect(
        useCallback(() => {
            getServicos();
        }, [])
    );
    return (
         <View>
            <ScrollView horizontal={false} contentContainerStyle={styles.container}>
            {servicos.map((servico, index) => (
             
                <Card key={index} style={styles.card}>
                <Card.Content>
                <Title> {servico.nome}</Title>
                <Paragraph>{servico.nome}</Paragraph>
                <Paragraph style={styles.valor}>{servico.descricao}</Paragraph>
                </Card.Content>
                <Card.Actions>
                <Button Title="test">Contratar</Button>
                </Card.Actions>
            </Card>
                ))}
            </ScrollView>
        </View>
    )
}