import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Card, Title, Paragraph, Button } from 'react-native-paper'
import iconDefault from '../../assets/blog.png'
import styles from './styles';
export default function ServicosCard({ titulo, foto, conteudo, dataPublicacao, concluida })
{
    const servicos = [
        { id: 1, titulo: 'Serviço 1', descricao: 'Descrição do serviço 1', valor: 'R$ 100,00' },
        { id: 2, titulo: 'Serviço 2', descricao: 'Descrição do serviço 2', valor: 'R$ 200,00' },
        { id: 3, titulo: 'Serviço 3', descricao: 'Descrição do serviço 2', valor: 'R$ 200,00' },
        { id: 4, titulo: 'Serviço 4', descricao: 'Descrição do serviço 2', valor: 'R$ 200,00' },
        // Adicione mais serviços conforme necessário
        ];
    return (
        <ScrollView horizontal={false} contentContainerStyle={styles.container}>
        {servicos.map(servico => (
          <Card key={servico.id} style={styles.card}>
            <Card.Content>
              <Title>{servico.titulo}</Title>
              <Paragraph>{servico.descricao}</Paragraph>
              <Paragraph style={styles.valor}>{servico.valor}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => console.log(`Contratar ${servico.titulo}`)}>Contratar</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    );
  }
