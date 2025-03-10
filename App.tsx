import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TareasScreen from './src/screens/tareasScreen';
import CalendarioScreen from './src/screens/Calendario';

export type RootStackParamList = {
  CalendarioScreen: undefined;
  TareasScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const backgroundColor = '#ffffff'; 

  useEffect(() => {
    StatusBar.setBarStyle('dark-content'); 
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CalendarioScreen">
          <Stack.Screen name="CalendarioScreen" component={CalendarioScreen} />
          <Stack.Screen name="TareasScreen" component={TareasScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;