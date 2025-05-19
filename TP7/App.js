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
  Pressable,
  Image
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});


const imagenFondo = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvDXLGQKpRM8mMKJzme4NftrhRck1ZzDA_g&s'
};

const imagenPerfil = {
  uri: 'https://media.cnn.com/api/v1/images/stellar/prod/cnne-407307-160927210830-tk-ah0927-exlarge-169.jpg?c=16x9&q=h_833,w_1480,c_fill'
}

export default function App() {
  const [mensaje, handleMensajeChange] = useState('');
  const [TextoCambiado, setTexto] = useState(false);  
  
  const handlePress = () => {
    Alert.alert('Mensaje enviado', mensaje || 'No se ingresó ningún mensaje');
  };

  const handlePress2 = () => {
    setTexto (!TextoCambiado);  
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={imagenFondo}
        style={styles.backgroundImage}>
        <View style={[styles.container, { backgroundColor: TextoCambiado ? 'gray' : 'grey' }]}>
        <Image source={imagenPerfil} style={styles.Perfil} />

          <Text style={styles.nombre}>Pepe</Text>
          <Text style={styles.titulo}>Backend Developer</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter a message"
            placeholderTextColor="#aaa"
            onChangeText={handleMensajeChange}
            value={mensaje}
          />
          
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.textoButton}>Contactar</Text>
          </TouchableOpacity>
          
          <Pressable
            onPress={handlePress2}
            style={({ pressed }) => [
              styles.button,{backgroundColor: pressed ? '#4e555b' : '#6C757D', },]}>
            <Text style={styles.textoButton}>
              {TextoCambiado ? "Perfil Activo" : "Ver Perfil"}
            </Text>
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
    alignItems: 'center',
  },

  Perfil: {
    width: 100,   
    height: 100, 
    borderRadius: 50,  
    marginBottom: 20,
  },

  container: {
    flex: 0.5,                   
    justifyContent: 'center',    
    alignItems: 'center',         
    padding: 20,                  
    borderRadius: 10,                
  },

  nombre: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },

  titulo: {
    fontSize: 20,
    color: '#DCDCDC',  
    marginBottom: 20,
  },

  input: {
    height: 60,
    width: '100%',
    backgroundColor: '#F0F0F0',  
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333', 
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#6C757D',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },

  textoButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
