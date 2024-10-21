import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgb(78, 192, 210)',
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 5,
        borderTopColor: 'rgb(0, 125, 161)',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
    },
    lateralDireita: {
        backgroundColor: 'red',
        position: 'fixed',
        width: '100%',
        height: '150px',
        bottom:'0px', left: '80%',


    },
    input: {
        marginVertical: 4,
        height: 50,
        width:'100%',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    image: {
        width: 80,
        height: 80
    },
    text: {
         position: 'relative',
         top: -30,
         color: 'rgb(0, 125, 161)'
    }
});

export default styles;