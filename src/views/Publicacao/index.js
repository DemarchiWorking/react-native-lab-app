import React, { useState } from "react";
import { Text, View, Image, TextInput, 
    KeyboardAvoidingView,  TouchableOpacity, ScrollView , Switch,
    Button
} from 'react-native';
import styles from "./styles";
import Header from "../../components/Cabecalho";
import Footer from "../../components/Rodape";
import icon from '../../assets/publicacao.png';
import { FIREBASE_APP, FIRESTORE_DB } from '../../../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore'

export default function Publicacao(){
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [foto, setFoto] = useState('');

const addPublicacao = async (publicacao) => {
    try {
        const docRef = await addDoc(collection(FIRESTORE_DB, 'publicacao'), publicacao);
        console.log('Documento adicionado com ID: ', docRef.id);
    } catch (e) {
        console.error('Erro ao adicionar documento: ', e);
    }
    };

    const handleAddPublicacao = () => {
    const publicacao = {
        titulo,
        conteudo,
        dataPublicacao: new Date(),
        foto,
    };
    addPublicacao(publicacao);
    };

    return (
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <Header showBack={true}/> 
                    <ScrollView style={{width: '100%'}}>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                        </ScrollView>  
                    </ScrollView>

                            <TouchableOpacity style={styles.form}>
                                
                                <Text style={styles.label} className="text-red-500"> Título </Text>
                                <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} maxLength={50} placeholder="Digite o título."></TextInput>

                                <Text style={styles.label}> Foto </Text>
                                <TextInput style={styles.input} value={foto} onChangeText={setFoto}  maxLength={90} placeholder="Entre com link."/>

                                <Text style={styles.label}> Conteúdo </Text>
                                <TextInput style={styles.input} 
                                value={conteudo} onChangeText={setConteudo} 
                                maxLength={500} multiline={true}
                                placeholder="Digite o texto da publicacao"/>
                            
                                <View style={styles.linha}>
                                <Button title="Postar" onPress={handleAddPublicacao}/>
                                    <View style={styles.inputLinha}>
                                        <Switch/>
                                        <Text style={styles.switchLabel}> Concluido </Text>
                                    </View>
                                <TouchableOpacity>
                                    <Text style={styles.removeLabel}> EXCLUIR</Text>
                                </TouchableOpacity>
                                <View>
                                
            
                                </View>
                                </View>
                                </TouchableOpacity>

                        <View style={styles.espaco}>
                        </View>

               
                    <Footer />
                </KeyboardAvoidingView>
       
    )
}