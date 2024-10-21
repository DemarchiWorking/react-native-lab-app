import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput, Button } from 'react-native';
import Header from '../../components/Cabecalho';
import styles from './styles';
import ComboPerfil from '../../components/ComboPerfil';
import ComboCartaoInfo from '../../components/ComboCartaoInfo';
import MinhaTab from '../../components/MainTabs';

export default function Perfil(){
    //const [email, setEmail] = useState('');
   
   return (
        <View style={styles.container}>
            <Header mostrarNotificacao={false}/>
                <View style={styles.posicaoflexstart}>
         
                <ComboPerfil></ComboPerfil>
                </View>
                <View style={styles.posicaoflexend}>
            
                <Text style={styles.tituloNome}> Antonio Demarchi </Text>
                <Text style={styles.subtitulo}> Iniciante </Text>
                </View>

                <View style={styles.comboBotao}>
                    <TouchableOpacity style={[styles.button, styles.leftButton]}>
                            <Text style={styles.buttonText}>Interesse em </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.rightButton]}>
                        <Text style={styles.buttonText}> Serviços </Text>
                        </TouchableOpacity>
            </View> 
            <ComboCartaoInfo/>
                        <Text> Test </Text>
                   
               <Text> Test </Text>
        </View> 
            
    )
}
