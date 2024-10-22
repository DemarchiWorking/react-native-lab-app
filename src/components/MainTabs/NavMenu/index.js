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
        { id: '1', title: 'Publicações' },
        { id: '2', title: 'Negócios' },
        { id: '3', title: 'Serviços' },
        { id: '4', title: 'Produtos' },
        { id: '5', title: 'Vagas' },
        { id: '6', title: 'Usuarios' }
    ];

    const Item = ({ title }) => (
        <View style={styles.card2}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );  
      const renderItem = ({ item }) => <Item title={item.title} />;

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