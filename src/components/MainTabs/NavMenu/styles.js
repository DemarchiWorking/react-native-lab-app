import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        justifyContent: 'space-between',
    },
    card: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f8f8f8',
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 2,
        },
        card2: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f8f8f8',
            padding: 20,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 2,
            width: '49%',
          },
        foto: {
            width: 70,
            height: 70
        },
        image: {
          width: 50,
          height: 50,
          borderRadius: 25,
          marginRight: 10,
        },
        nome: {
          flex: 1,
          paddingLeft: 15,
          fontSize: 18,
          color: '#000',
        },
      
});

export default styles;