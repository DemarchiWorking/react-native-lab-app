import React, { useState, useCallback } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Input, Icon } from 'react-native-elements'

import styles from './styles';
import Header from '../../Cabecalho';
import NegocioCard from '../../NegocioCard';
import ServicoCard from '../../ServicoCard';


export default function NavNegocios()
{
    return (
        <View style={styles.container}>
            <Header mostrarNotificacao={false}/>
                <Text style={{ padding: 10, fontSize: 18}}> Negócios </Text>

                <NegocioCard></NegocioCard>
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

                </View>          
                <ServicoCard></ServicoCard>
        </View>
    )
}