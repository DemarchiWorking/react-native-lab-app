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
        position: 'relative',
        top: -40
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