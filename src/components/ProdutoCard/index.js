import React, { useState, useCallback } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './styles';
import { FIREBASE_APP, FIRESTORE_DB } from '../../../FirebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { useFocusEffect } from '@react-navigation/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper'
import { View, Image, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';

export default function NegocioCard()
{
    const [searchQuery, setSearchQuery] = useState('');
    const products = [
      { id: '1', name: 'Produto 1' },
      { id: '2', name: 'Produto 2' },
      { id: '3', name: 'Produto 3' },
      { id: '4', name: 'Produto 4' },
      // Adicione mais produtos aqui
        ];


    const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
         <View>
                <View style={styles.searchBar}>
                    <FontAwesome name="search" size={20} color="black" />
                    <TextInput
                    style={styles.input}
                    placeholder="Buscar"
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                    />
                </View>
                <FlatList
                    data={filteredProducts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                         <Image source={{ uri: 'https://i.ibb.co/P6rPskw/302418990-515186947275680-1839222343831186410-n.jpg' }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.descricao}> Text ttt </Text>
                            <Text style={styles.valor}>R$ 30, 00</Text>
                            <Text style={styles.autor}> Antonio Demarchi </Text>
                        </View>
                        <Text style={styles.productText}>{item.name}</Text>
                    </TouchableOpacity>
                    )}
                /> 
        </View>
    )
}    
