import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface BotonDiaProps {
  day?: number;
  isPlaceholder?: boolean;
  navigation: any;  
}

const BotonDia = ({ day, isPlaceholder, navigation }: BotonDiaProps) => {
  if (isPlaceholder) {
    return <View style={styles.itemPlaceholder} />;
  }

  const hoy = new Date();
  const mes = hoy.getMonth() + 1;
  const año = hoy.getFullYear();

  return (
    <TouchableOpacity
      style={styles.boton}
      onPress={() => navigation.navigate('TareasScreen')} 
    >
      <Text style={styles.textoBoton}>{day}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    textAlign: 'center',
  },
  itemPlaceholder: {
    width: '100%',
    height: 40,
  },
});

export default BotonDia;
