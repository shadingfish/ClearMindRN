// App.js

import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';
import LoadingIndicator from './src/components/LoadingIndicator';

export default function App() {
  const [fontsLoaded] = useFonts({
    // 'Delius Swash Caps': require('./src/assets/fonts/delius_swash_caps.ttf'),
    // 'Open Sans': require('./src/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingIndicator />;
  }

  return <AppNavigator />;
}
