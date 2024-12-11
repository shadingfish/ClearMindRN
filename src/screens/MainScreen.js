// MainScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ref, get } from 'firebase/database';
import { database } from '../config/firebaseConfig.js';
import { COLORS } from '../constants/colors';

export default function MainScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Please enter username and password');
      return;
    }

    const userRef = ref(database, `/users/${username}`);
    get(userRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          const user = snapshot.val();
          if (user.password === password) {
            navigation.navigate('Learn', { username });
          } else {
            Alert.alert('Wrong Password');
          }
        } else {
          Alert.alert('New User, please register first');
        }
      })
      .catch(() => Alert.alert('Error logging in.'));
  };

  const handleRegister = () => navigation.navigate('Signup');
  const handleForgotPassword = () =>
    navigation.navigate('ForgotPassword', { username });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ClearMind</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  linkText: {
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 10,
  },
});
