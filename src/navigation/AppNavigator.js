// AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen.js';
// import SignupScreen from '../screens/SignupScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// import LearnScreen from '../screens/LearnScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        {/* <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
