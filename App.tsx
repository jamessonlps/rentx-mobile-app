import React from 'react';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from "@expo-google-fonts/archivo"
import {
  Inter_400Regular,
  Inter_500Medium
} from "@expo-google-fonts/inter"
import AppLoading from 'expo-app-loading';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
