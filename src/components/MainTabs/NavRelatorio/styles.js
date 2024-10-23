import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
      }    
});

export default styles;