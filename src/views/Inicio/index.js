import React, { useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import Header from '../../components/Cabecalho'
import Footer from '../../components/Rodape'
import styles from "./styles";


export default function Inicio(){
    const [filtro, setFiltro] = useState('todos');


    return (
        <View style={styles.container}>
            <Header mostrarNotificacao={true}/>
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
                        Ano
                    </Text>
                </TouchableOpacity>
            </View>
            <Text> Bem vindo a tela HOME</Text>
            <Footer icon={'add'}/>
        </View>
    )
}
