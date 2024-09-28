import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Contador = ({ valor }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.contador}>{valor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    borderWidth: 4,
    borderColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 20,
    borderRadius: 10, // Bordes redondeados del cuadro
  },
  contador: {
    fontSize: 100,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Contador;
