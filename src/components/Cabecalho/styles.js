import react from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        backgroundColor: 'rgb(78, 192, 210)',
        borderBottomWidth: 4,
        borderBottomColor: 'rgb(157, 157, 157)',
        
    },
    logo: {
        marginTop: 50,
        width: 100,
        height: 30,
        //padding: 30
    },
    sino: {
        marginTop: 40,
        width: 43,
        height: 43,
    },
    notificacao: {
        position: 'absolute',
        right: 20
    },
    notificacaoText: {
        fontWeight: 'bold',
        color: 'blue'
    },
    circulo: {
        width: 30,
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        left: 20,
        bottom: 13,
    }
});

export default styles;