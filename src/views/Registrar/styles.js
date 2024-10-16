import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex',
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },
    filtroTextoAtivado: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'rgb(78, 192, 210)'
    },
    filtroTextoDesativado: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'rgb(157, 157, 157)',
        opacity: 0.8
    },
    conteudo: {
        width: '100%',
        marginTop: 30,

    },
    titulo: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'rgb(78, 192, 210)',
        alignItems: 'center'
    },
    tituloTexto: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#FFF',
        paddingHorizontal: 10
    },
    input: {
        marginVertical: 4,
        height: 50,
        width:'70%',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }

});

export default styles