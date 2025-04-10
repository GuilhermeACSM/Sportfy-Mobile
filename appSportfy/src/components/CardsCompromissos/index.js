import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';

export default function CardCompromisso({ data }) {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{data.titulo}</Text>
      <Text style={styles.descricao}>{data.descricao}</Text>
      <Text style={styles.dataHora}>{data.data} - {data.hora}</Text>

      <View style={styles.botoes}>
        {data.dono ? (
          <>
            <TouchableOpacity style={styles.botaoEditar} onPress={() => navigation.navigate('EditarEvento', { data: data })}
            >
              <Text style={styles.textoBotao}>Editar Evento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoVer}>
              <Text style={styles.textoBotao}>Ver Participantes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoExcluir}>
              <Text style={styles.textoBotao}>Excluir Evento</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.botaoSair}>
              <Text style={styles.textoBotao}>Sair do Evento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoVer}>
              <Text style={styles.textoBotao}>Ver Participantes</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}