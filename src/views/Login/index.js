import React, { useState } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import Header from '../../components/Cabecalho';
import Footer from '../../components/Rodape';
import styles from './styles';
import PublicacaoCard from '../../components/PublicacaoCard';
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('') ;
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);

        try{
            const response = await signInWithEmailAndPassword(auth, email, senha);
            console.log(response);
        }catch(error){
            console.log(error);
            alert('Sign in failed ' + error.message)
        } finally {
            setLoading(false)
        }
    }
   return (
        <View style={styles.container}>
                <Text style={styles.label}> Login </Text>
                <TextInput value={email} style={styles.input} maxLength={90} autoCapitalize="none" onChangeText={(text) => setEmail(text)} placeholder="Email"/>

                <Text style={styles.label}> Senha </Text>
                <TextInput value={senha} style={styles.input} maxLength={90} autoCapitalize="none" onChangeText={(text) => setSenha(text)} placeholder="Senha"/>
              
                
                {   loading ? <ActivityIndicator size="large" color="#0000ff"/> 
            :   <>
            
            <Button title="Entrar" onPress={signIn}/>
            </>
         }
        </View> 
            
    )
}
