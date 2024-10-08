import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex'
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

});

export default styles