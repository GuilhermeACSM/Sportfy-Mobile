import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header';
import styles from './styles';

export default function EditarPerfil({ navigation }) {
    const route = useRoute();
    const fotoPerfilAntiga = route.params?.fotoPerfil; // Pegando a foto da Home

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [foto, setFoto] = useState(null);

    useEffect(() => {
        const buscarFotoSalva = async () => {
            const fotoSalva = await AsyncStorage.getItem('fotoPerfil');
            if (fotoSalva) {
                setFoto(fotoSalva);
            }
        };

        buscarFotoSalva();
    }, []);

    const handleEscolherFoto = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setFoto(uri);
            await AsyncStorage.setItem('fotoPerfil', uri);
        }
    };


    const handleSalvar = () => {
        Alert.alert('Sucesso', 'Alterações salvas com sucesso!');
        navigation.navigate('Home', { fotoPerfil: foto });
    };

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />

            <View style={styles.content}>

            <TouchableOpacity onPress={handleEscolherFoto}>
        {foto ? (
          <Image
            source={{ uri: foto }}
            style={{ width: 150, height: 150, borderRadius: 75 }}
          />
        ) : (
          <View style={{ 
            width: 150, 
            height: 150, 
            borderRadius: 75, 
            backgroundColor: '#ccc', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <Icon name="camera-plus" size={50} color="#fff" />
          </View>
        )}
      </TouchableOpacity>

                <Text style={styles.title}>Editar Perfil</Text>

                <View style={styles.inputArea}>
                    <Icon name="account" size={25} color="#ffc72c" />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#aaa"
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <View style={styles.inputArea}>
                    <Icon name="email" size={25} color="#ffc72c" />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#aaa"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputArea}>
                    <Icon name="phone" size={25} color="#ffc72c" />
                    <TextInput
                        style={styles.input}
                        placeholder="Telefone"
                        placeholderTextColor="#aaa"
                        value={telefone}
                        onChangeText={setTelefone}
                    />
                </View>

                <View style={styles.inputArea}>
                    <Icon name="lock" size={25} color="#ffc72c" />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                    <Text style={styles.buttonText}>Salvar Alterações</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
