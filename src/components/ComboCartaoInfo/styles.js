import { Platform } from 'react-native';
import react from 'react';
import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
            top: -100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
      },    
      card: {
        backgroundColor: 'rgb(78, 192, 210)',
        opacity: 0.8,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
      },
      cardTitle: {
        fontSize: 18,
        marginBottom: 10,
      },
      
      input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      displayText: {
        fontSize: 16,
        color: '#000',
    
      }

});

export default styles;