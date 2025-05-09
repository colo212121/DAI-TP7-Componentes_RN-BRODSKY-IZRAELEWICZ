import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Pressable
} from 'react-native';

const imagenFondo = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvDXLGQKpRM8mMKJzme4NftrhRck1ZzDA_g&s'
};

export default function App() {
  const [mensaje, handleMensajeChange] = useState('');

  const handlePress = () => {
    Alert.alert('Mensaje enviado', mensaje || 'No se ingresó ningún mensaje');
  };
  
  const [fondoAzul, setFondoAzul] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={fondoAzul ? null : imagenFondo}
        style={[styles.backgroundImage, { backgroundColor: fondoAzul ? 'blue' : 'transparent' }]}
        blurRadius={fondoAzul ? 0 : 3}
      >
        <View style={styles.overlay}>
          <Text style={styles.name}>Pepe</Text>
          <Text style={styles.subtitle}>Backend Developer</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a message"
            placeholderTextColor="#ccc"
            onChangeText={handleMensajeChange}
            value={mensaje}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Contactar</Text>
          </TouchableOpacity>
          <Pressable
            style={[styles.button, { backgroundColor: 'blue', marginTop: 10 }]}
            onPress={() => setFondoAzul(true)}
          >
            <Text style={styles.buttonText}>Ver Perfil</Text>
          </Pressable>
          <StatusBar style="light" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 30,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    marginBottom: 20
  },
  input: {
    height: 45,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#00aced',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
