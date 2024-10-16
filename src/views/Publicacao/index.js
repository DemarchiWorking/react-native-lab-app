import React, { useState } from "react";
import { Text, View, Image, TextInput, 
    KeyboardAvoidingView,  TouchableOpacity, ScrollView , Switch,
    Button
} from 'react-native';
import styles from "./styles";
import Header from "../../components/Cabecalho";
import Footer from "../../components/Rodape";
import icon from '../../assets/publicacao.png'
export default function Publicacao(){

    // Função para adicionar um documento ao Firestore
    const addPublicacao = async (publicacao) => {
      try {
        const docRef = await addDoc(collection(FIRESTORE_DB, 'Publicacao'), publicacao);
        console.log('Documento adicionado com ID: ', docRef.id);
      } catch (e) {
        console.error('Erro ao adicionar documento: ', e);
      }
    }
    

    return (
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <Header showBack={true}/> 
                    <ScrollView style={{width: '100%'}}>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                        </ScrollView>  
                    </ScrollView>

                            <TouchableOpacity style={styles.form}>
                                
                                <Text style={styles.label} className="text-red-500"> Título </Text>
                                <TextInput style={styles.input} maxLength={50} placeholder=""/>

                                <Text style={styles.label}> Foto </Text>
                                <TextInput style={styles.input} maxLength={90} placeholder=""/>

                                <Text style={styles.label}> Texto </Text>
                                <TextInput style={styles.input} 
                                maxLength={500} multiline={true}
                                placeholder="Texto da publicacao"/>
                            
                                <View style={styles.linha}>
                                    <View style={styles.inputLinha}>
                                        <Switch/>
                                        <Text style={styles.switchLabel}> Concluido </Text>
                                    </View>
                                <TouchableOpacity>
                                    <Text style={styles.removeLabel}> EXCLUIR</Text>
                                </TouchableOpacity>
                                <View>
                                <Button title="Postar" onPress={addPublicacao}/>
            
                                </View>
                                </View>
                                </TouchableOpacity>

                        <View style={styles.espaco}>
                        </View>

               
                    <Footer />
                </KeyboardAvoidingView>
       
    )
}