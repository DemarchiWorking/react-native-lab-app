import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    },
    scrollViewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      circleContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ddd',
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
      },
      text: {
        position: 'absolute',
        bottom: 5,
        color: '#fff',
        fontWeight: 'bold',
      },
});

export default styles;