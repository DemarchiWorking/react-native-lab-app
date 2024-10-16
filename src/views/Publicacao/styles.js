import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#FFF',
       justifyContent: 'flex-start',
        // width: '100%',
        // backgroundColor: '#FFF'
    },
    form: {
        paddingBottom: '70%',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    imagePub: {
        width: 90,
        height: 90,
    },
    label: {
        textAlign: 'center',
        marginTop: 10,
    },
      input: {
        marginVertical: 4,
        height: 50,
        width:'80%',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
});

export default styles;