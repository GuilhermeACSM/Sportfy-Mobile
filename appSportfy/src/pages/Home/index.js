import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import styles from './styles';

export default function Home({ navigation }) {
  const nomeUsuario = 'Guilherme';

  //Para a Foto de Perfil
  const route = useRoute();
  const fotoPerfil = route.params?.fotoPerfil;


  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.content}>

        <View style={styles.profileContainer}>
          {fotoPerfil ? (
            <Image source={{ uri: fotoPerfil }} style={{ width: 100, height: 100, borderRadius: 50 }} />
          ) : (
            <Icon name="account-circle" size={100} color="#ffc72c" />
          )}

          <Text style={styles.welcomeText}>Olá, {nomeUsuario}!</Text>
          <Text style={styles.subtitle}>
            Conectando pessoas através do esporte!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditarPerfil', { fotoPerfil: fotoPerfil })}
        >
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compromissos')}>
          <Text style={styles.buttonText}>Meus Compromissos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CriarEvento')}>
          <Text style={styles.buttonText}>Criar Novo Evento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Eventos')}>
          <Text style={styles.buttonText}>Ver Eventos Disponíveis</Text>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Icon name="soccer" size={30} color="#ffc72c" />
          </View>
          <View style={styles.iconBackground}>
            <Icon name="basketball" size={30} color="#ffc72c" />
          </View>
          <View style={styles.iconBackground}>
            <Icon name="volleyball" size={30} color="#ffc72c" />
          </View>
          <View style={styles.iconBackground}>
            <Icon name="tennis" size={30} color="#ffc72c" />
          </View>
        </View>

      </View>
    </View>
  );
}
