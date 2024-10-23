// App.js

import * as React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './components/MainScreen';
// import other screens like SignupScreen, ForgotPasswordScreen, LearnScreen

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Delius Swash Caps': require('./assets/fonts/DeliusSwashCaps-Regular.ttf'),
    'Open Sans': require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        {/* Define other screens here */}
        {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
        {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
        {/* <Stack.Screen name="Learn" component={LearnScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
