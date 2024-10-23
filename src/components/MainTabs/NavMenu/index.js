import React from 'react';
import { 
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image } from 'react-native';
    
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import perfil from '../../../assets/perfil-vazio.jpg';
export default function NavMenu()
{
    const DATA = [
        { id: '1', titulo: 'Publicações' },
        { id: '2', titulo: 'Negócios' },
        { id: '3', titulo: 'Serviços' },
        { id: '4', titulo: 'Produtos' },
        { id: '5', titulo: 'Vagas' },
        { id: '6', titulo: 'Usuarios' },
        { id: '7', titulo: 'Perfil' },
        { id: '8', titulo: 'Configurações' }
    ];

    const Item = ({ titulo }) => (
        <View style={styles.card2}>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>
      );  
      const renderItem = ({ item }) => <Item titulo={item.titulo} />;

    return (
    <View style={styles.container}>
        <View>
            <TouchableOpacity style={styles.card}>
            <Image style={styles.foto} source={perfil}/>
            <Text style={styles.nome}>Test </Text>
            <Icon name="person" size={30} color="#000" />
            </TouchableOpacity>
        </View>
        <View>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
        />
        </View>
    </View> 
    )
}