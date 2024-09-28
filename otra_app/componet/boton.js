import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botones = ({ incrementarContador,  reiniciarContador }) => {
  return (
    <View style={styles.botones}>
      <TouchableOpacity style={[styles.boton, styles.botonAzul]} onPress={incrementarContador}>
        <Text style={styles.textoBoton}>    Clic    </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, styles.botonVerde]} onPress={reiniciarContador}>
        <Text style={styles.textoBoton}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  botones: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  boton: {
    paddingVertical: 10, // Espaciado vertical
    paddingHorizontal: 20, // Espaciado horizontal
    borderRadius: 8, // Bordes redondeados
    alignItems: 'center', // Centrar el texto horizontalmente
    justifyContent: 'center', // Centrar el texto verticalmente
    width: 150, // Ancho fijo
    height: 50, // Alto fijo
    marginVertical: 5,
  },
  botonAzul: {
    backgroundColor: '#3a86ff',
  },
  botonVerde: {
    backgroundColor: '#2ec4b6',
  },
  
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Botones;
