import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles.js';
import CardCompromisso from '../../components/CardsCompromissos';
import Header  from '../../components/Header';

export default function MeusCompromissos({ navigation }) {
  const compromissos = [
    { id: '1', titulo: 'Futebol na Quadra', descricao: 'Partida entre amigos', data: '20/04/2025', hora: '19:00', dono: true },
    { id: '2', titulo: 'Vôlei na Praia', descricao: 'Treino recreativo', data: '22/04/2025', hora: '15:00', dono: false },
    { id: '3', titulo: 'Basquete na Escola', descricao: 'Jogo treino', data: '25/04/2025', hora: '20:30', dono: true },
  ];

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <View style={styles.content}>
        <FlatList
          data={compromissos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardCompromisso data={item} />}
        />
      </View>
    </View>
  );
}

