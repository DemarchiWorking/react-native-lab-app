import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Input, Icon } from 'react-native-elements'

import styles from './styles';
import Header from '../../Cabecalho';
import ServicosCard from '../../ServicosCard';
     

const lojas = [
  { id: 1, nome: 'Loja 1', imagem: 'https://via.placeholder.com/100' },
  { id: 2, nome: 'Loja 2', imagem: 'https://via.placeholder.com/100' },
  { id: 3, nome: 'Loja 3', imagem: 'https://via.placeholder.com/100' },
  { id: 4, nome: 'Loja 2', imagem: 'https://via.placeholder.com/100' },
  { id: 5, nome: 'Loja 3', imagem: 'https://via.placeholder.com/100' },
  // Adicione mais lojas conforme necessário
];

export default function NavServicos()
{
    return (
        <View style={styles.container}>
            <Header mostrarNotificacao={false}/>
                <Text style={{ padding: 10, fontSize: 18}}> Negócios </Text>
                <ScrollView horizontal={true}  contentContainerStyle={styles.scrollViewContainer}>
                {lojas.map((loja) => (
                    <View key={loja.id} style={styles.circleContainer}>
                    <Image source={{ uri: loja.imagem }} style={styles.image} />
                    <Text style={styles.text}>{loja.nome}</Text>
                    </View>
                ))}
                </ScrollView>
                <Input
                        placeholder='Pesquisar...'
                        leftIcon={
                        <Icon
                            name='search'
                            type='font-awesome'
                            size={24}
                            color='black'
                        />
                        }
                    />
                <Text style={{ padding: 10, fontSize: 18}}> Serviços </Text>

                <View>
                <ServicosCard/>
                <ServicosCard/>
                <ServicosCard/>
                <ServicosCard/>

                </View>          
           
        </View>
    )
}