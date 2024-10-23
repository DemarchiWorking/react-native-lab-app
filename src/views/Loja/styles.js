import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
      },
      coverImage: {
        width: '100%',
        height: 200,
      },
      avatarContainer: {
        position: 'absolute',
        top: 150,
        left: '50%',
        transform: [{ translateX: -50 }],
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#FFF',
        zIndex: 1,
      },
      avatar: {
        width: '100%',
        height: '100%',
      },
      card: {
        marginTop: 60,
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        alignItems: 'center',
      },
      storeName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
      },
});

export default styles