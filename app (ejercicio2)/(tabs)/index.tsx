import { Platform, StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';

const { height } = Dimensions.get('window'); // Medidas de la pantalla

export default function HomeScreen() {
  const [text, onChangeText] = useState('');
  const [buttonColor, setButtonColor] = useState('white');

  // Función para generar un color aleatorio
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
      <View>
        <Text style={styles.titulo}>Aguante Ten shin Han</Text>  
      </View>
      <View>
        <Pressable
          onPress={() => setButtonColor(getRandomColor())}
          style={({ pressed }) => [
            styles.wrapperCustom,
            {
              backgroundColor: pressed ? 'white' : buttonColor,
              shadowColor: 'cyan',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: pressed ? 1 : 0.5,
              shadowRadius: pressed ? 40 : 10,
              elevation: pressed ? 10 : 5,
              borderColor: pressed ? 'white' : 'black',
            }
          ]}
        >
          {({ pressed }) => (
            <Text style={[styles.text, { color: pressed ? 'black' : 'white' }]}>
              Ki ko hou
            </Text>
          )}
        </Pressable>
      </View>
      <View>
        <Image 
          style={styles.imagen}
          source={{ uri: 'https://www.ilfolletto.com/cdn/shop/products/StarComicsDragonBallUltimateEdition9.jpg?v=1673878841' }}
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Escribite algo!"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 70,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
    letterSpacing: 5,
    fontWeight: '800',
  },
  imagen: {
    width: '80%',
    height: height * 0.4, // 40% de la altura de la pantalla
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    height: 100,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 30,
    backgroundColor: 'gray', // Corregido
    // Sombra iOS
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    // Sombra Android
    elevation: 5,  
  },
  wrapperCustom: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 1,
    width: 400,
    height: 200,
    marginBottom: 50,
  },
  text: {
    fontSize: 60,
    textAlign: 'center',
  },
});
