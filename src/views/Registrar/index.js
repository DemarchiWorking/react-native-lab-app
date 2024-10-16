import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, TextInput, Button, ActivityIndicator } from 'react-native';
import Header from '../../components/Cabecalho';
import Footer from '../../components/Rodape';
import styles from './styles';
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
//import PublicacaoCard from '../../components/PublicacaoCard';

export default function Login(){

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('') ;
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);

        try{
            const response = await auth.signInWithEmailAndPassword(auth, email, senha);
            console.log(response);
        }catch(error){
            console.log(error);
            alert('Sign in failed ' + error.message)
        } finally {
            setLoading(false)
        }
    }
    const signUp = async () => {
        setLoading(true);
        try{
            console.log(email+senha)
            const response = await createUserWithEmailAndPassword(auth, email, senha);
            console.log(response);

        } catch(error){
            console.log(error);
            alert('Sign in failed: '+ error.message)
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}> Nome </Text>
            <TextInput value={nome} style={styles.input} maxLength={90} autoCapitalize="none" onChangeText={(text) => setNome(text)} placeholder="Nome"/>

            <Text style={styles.label}> Telefone </Text>
            <TextInput value={telefone} style={styles.input} maxLength={90} autoCapitalize="none" onChangeText={(text) => setTelefone(text)} placeholder="Telefone"/>

            <Text style={styles.label}> Email </Text>
            <TextInput value={email} style={styles.input} maxLength={90} autoCapitalize="none" onChangeText={(text) => setEmail(text)} placeholder="Email"/>

            <Text style={styles.label}> Senha </Text>
            <TextInput value={senha} style={styles.input} maxLength={90} autoCapitalize="none" onChangeText={(text) => setSenha(text)} placeholder="Senha"/>

        {   loading ? <ActivityIndicator size="large" color="#0000ff"/> 
            :   <>
            
            <Button
            //onPress={() => Alert.alert('Botão pressionado!')}
            title="Clique aqui"
            color="#841584"
            accessibilityLabel="Clique neste botão para aprender mais"
            
            > Registrar  </Button>
            
            <Button title="Criar Conta" onPress={signUp}/>
            
            </>
         }
        </View>
    )
}
