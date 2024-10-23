import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
          backgroundColor: 'rgb(118, 192, 210)',
        alignItems: 'center',
        justifyContent: 'flex',
    },
    header: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
          backgroundColor: 'rgb(78, 192, 210)'
        },
        list: {
          paddingBottom: 20,
        },
        notificationItem: {
          backgroundColor: '#FFFFFF',
          padding: 15,
          marginVertical: 8,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 3,
        },
        notificationTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 5,
        },
        notificationDescription: {
          fontSize: 14,
          color: '#555',
        }      
});

export default styles