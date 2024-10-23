import react from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {},
    container: {
        flex: 1,
        padding: 10,
      },
      searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
      },
      input: {
        flex: 1,
        marginLeft: 10,
      },
      productContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      },
      productText: {
        fontSize: 16,
      },
      card: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        alignItems: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
      },
      textContainer: {
        flex: 1,
      },
      descricao: {
        fontSize: 16,
        color: '#444',
      },
      valor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 5,
      },
      autor: {
        fontSize: 14,
        color: '#888',
        textAlign: 'right',
      },
});

export default styles;