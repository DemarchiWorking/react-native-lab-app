import React from "react";
import styles from './styles';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Loja(){

    const ProfilePage = ({ coverImageUrl, avatarUrl, storeName, description }) => {
        return (
          <View style={styles.container}>
            <Image source={{ uri: coverImageUrl }} style={styles.coverImage} />
            <View style={styles.avatarContainer}>
              <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            </View>
            <View style={styles.card}>
              <Text style={styles.storeName}>{storeName}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        );
    }
}