import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
 
export default function App() {
  const [selectedValue, setSelectedValue] = useState("servicos");
  const [visible, setVisible] = useState(Platform.OS === 'ios' ? false : true);

  return (
    <View style={styles.container}>
      <View style={styles.tituloCard}>
        <Text>Escolha uma opção:</Text>
        
        {Platform.OS === 'ios' && (
          <Button title={visible ? "Selecione uma opção" : selectedValue} onPress={() => setVisible(!visible)} />
        )}

        {visible && (
          <Picker
            selectedValue={selectedValue}
            style={Platform.OS === 'ios' ? styles.pickerIOS : styles.picker}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Serviços" value="servicos" />
            <Picker.Item label="Negócios" value="negocios" />
            <Picker.Item label="Vagas" value="vagas" />
            <Picker.Item label="Loja" value="loja" />
            <Picker.Item label="Produtos" value="produtos" />
          </Picker>
        )}
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Digite algo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escreva aqui..."
          value={selectedValue}
          onChangeText={(value) => setSelectedValue(value)}
        />
        <Text style={styles.displayText}>{selectedValue}</Text>
      </View>

      <View style={{padding: 100}} />
    </View>
  )
}
