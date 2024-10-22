import React, { useEffect, useState, useCallback } from "react";
import { Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Cabecalho';
import Footer from '../../components/Rodape';
import styles from './styles';
import PublicacaoCard from '../../components/PublicacaoCard';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_APP, FIRESTORE_DB } from '../../../FirebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { useFocusEffect } from '@react-navigation/native';
import MainTabs from "../../components/MainTabs";

export default function Inicio(){
    
    const [publicacao, setPublicacao] = useState([])
    const getPublicacoes = () => {
        const q = query(collection(FIRESTORE_DB, 'publicacao'), orderBy('dataPublicacao', 'desc')); // Ordenar por dataPublicacao em ordem decrescente
        getDocs(q).then((querySnapshot) => {
          const publicacaoList = [];
          querySnapshot.forEach((doc) => {
            publicacaoList.push({ id: doc.id, ...doc.data() });
          });
          setPublicacao(publicacaoList);
        }).catch((error) => {
          console.error('Erro ao obter documentos: ', error);
        });
      };
      
      // Use useFocusEffect para chamar getPublicacoes sempre que a tela for focada
      useFocusEffect(
        useCallback(() => {
          getPublicacoes();
        }, [])
    );
      

    const [filtro, setFiltro] = useState('todos');
    const navigation = useNavigation();
    const irParaPublicacao = () => {
        navigation.navigate('Publicacao');
      };
    return (
        <View style={styles.container}>
            <Header mostrarNotificacao={true}/>
            <View>
                <Button title="Ir para Publicação" onPress={irParaPublicacao} />
            </View>
            <View style={styles.filter}>
                
                <TouchableOpacity onPress={() => setFiltro('todos')}>
                    
                    <Text style={
                        filtro == 'todos' ? styles.filtroTextoAtivado : styles.filtroTextoDesativado}>
                        Todos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => setFiltro('hoje')}>
                    <Text style={
                            filtro == 'hoje' ? styles.filtroTextoAtivado : styles.filtroTextoDesativado}>
                        Hoje
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => setFiltro('semana')}>
                    <Text style={
                            filtro == 'semana' ? styles.filtroTextoAtivado : styles.filtroTextoDesativado}>
                        Semana
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => setFiltro('mes')}>
                    <Text style={
                            filtro == 'mes' ? styles.filtroTextoAtivado : styles.filtroTextoDesativado}>
                        Mês
                    </Text>
                </TouchableOpacity>
                        
                <TouchableOpacity  onPress={() => setFiltro('ano')}>
                    <Text style={
                            filtro == 'ano' ? styles.filtroTextoAtivado : styles.filtroTextoDesativado}>
                        Anoo
                    </Text>
                </TouchableOpacity>
            </View>
                        
 
           <View style={styles.titulo}>
            <Text style={styles.tituloTexto}> Publicações </Text>
           </View>
            <ScrollView style={styles.conteudo} contentContainerStyle={{alignItems: 'center'}}>
   
            {publicacao.map((pub, index) => (
                <PublicacaoCard key={pub.id || index} titulo={pub.titulo} conteudo={pub.conteudo} foto={pub.foto} dataPublicacao={pub.dataPublicacao}>
                </PublicacaoCard>
                ))}
     
            </ScrollView>
            <MainTabs/>
        </View>
    )
    
}
