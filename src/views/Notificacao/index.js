import React from "react";
import styles from './styles';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Notificacao(){
    const notifications = [
        { id: '1', title: 'Versão Beta. Liberadaaa !', description: 'Ajude nossa comunidade a testar as funcionalidades do app.' },
        { id: '2', title: 'Encontre lojas e prestadores', description: 'Aqui você pode encontrar diversos negócios.' },
        { id: '3', title: 'Bem vindo ao DesenvLivery', description: 'Parabéns, Aqui se inicia a sua jornada na nossa plataforma.' },
        // Adicione mais notificações aqui
      ];
      
      const NotificationItem = ({ title, description }) => (
        <View style={styles.notificationItem}>
          <FontAwesome name="bell" size={24} color="black" style={styles.icon} />
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.notificationDescription}>{description}</Text>
        </View>
      );
   return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '10%',
          backgroundColor: 'rgb(78, 192, 210)', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.header}>Notificações</Text>
            </View>
            <FlatList
                data={notifications}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                <NotificationItem title={item.title} description={item.description} />
                )}
                contentContainerStyle={styles.list}
            />
        </View> 
    )
}