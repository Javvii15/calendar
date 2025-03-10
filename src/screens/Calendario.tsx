import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navegacion from '../components/Navegacion';

const Calendario = () => {
  return (
    <View style={styles.container}>
      <Navegacion />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Calendario;
