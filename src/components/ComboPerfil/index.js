import { Text, View, TouchableOpacity, Image, ScrollView, TextInput, Button } from 'react-native';
import styles from './styles';
import foto from '../../assets/perfil-vazio.jpg';

export default function ComboPerfil()
{
    return (
        <View>
            <View style={styles.containerHeader}>
                <View style={styles.appNome}></View>
                <View style={styles.status}></View>
                    
            </View>

            <View style={styles.avatar}>
                
            <TouchableOpacity>
                <Image style={styles.foto} source={foto}/>
            </TouchableOpacity>
            </View>
                
                <Text> Perfil </Text>
            <Text> Olá mundo </Text>
            
        </View>
    )
}