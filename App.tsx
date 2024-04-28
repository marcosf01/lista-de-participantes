import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_700Bold 
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter_400': Inter_400Regular,
    'Inter_700': Inter_700Bold,
  })

  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
