import react from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {},
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        width: '90%',
        marginVertical: 4,
        height: 70,
        shadowColor: 'rgb(157, 157, 157)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10
    },
    containerLinha: {
        flexDirection: 'row',
    },
    cardEsquerdo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    tipoAtivo: {
        width: 50,
        height: 50
    },
    cardTitulo: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    cardDireito: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    cardData: {
        color: 'rgb(78, 192, 210)',
        fontWeight: 'bold',
        fontSize: 16
    },
    cardHora: {
        color: '#000',        
    },
    cartaoFinalizado: {
        opacity: 0.5
    },

});

export default styles;