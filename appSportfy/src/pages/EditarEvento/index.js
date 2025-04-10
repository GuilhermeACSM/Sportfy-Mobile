import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';

export default function EditarEvento({ route, navigation }) {
  const { data } = route.params;

  const [titulo, setTitulo] = useState(data.titulo);
  const [descricao, setDescricao] = useState(data.descricao);
  const [dataEvento, setDataEvento] = useState(data.data);
  const [horaEvento, setHoraEvento] = useState(data.hora);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>Editar Evento</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Título"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Descrição"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            value={dataEvento}
            onChangeText={setDataEvento}
            placeholder="Data"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            value={horaEvento}
            onChangeText={setHoraEvento}
            placeholder="Hora"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.button} onPress={() => {/* salvar aqui */}}>
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
            <Text style={styles.voltarText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
