import { StyleSheet } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        //padding: 15,
        flex: 1,
        backgroundColor: '#FFF',
    },
    posicaoflexstart: { 
        paddingRight: 15,
        alignItems: 'flex-end',
    },
    posicaoflexend: { 
        paddingLeft: 25,
        top: -120,
    },
    tituloNome: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subtitulo: {
        fontSize: 18,
        color: 'gray'
    },
    comboBotao: {
        top: -100,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(78, 192, 210)',
        borderWidth: 2,
        borderColor: 'rgb(78, 192, 210)',

      },
      leftButton: {
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 5,
        marginLeft: 110,
        backgroundColor: 'rgb(78, 192, 210)',
      },
      rightButton: {
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 5,
        backgroundColor: '#fff',

      },
      buttonText: {
        fontSize: 18,
        color:'#000',
      },
});

export default styles

