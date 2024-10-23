// components/MainScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../firebaseConfig';

const { width, height } = Dimensions.get('window');

const MainScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Please enter username and password');
      return;
    }

    firebase
      .database()
      .ref(`/users/${username}`)
      .once('value')
      .then((snapshot) => {
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
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegister = () => {
    navigation.navigate('Signup');
  };

  const handleForgotPassword = () => {
    if (!username) {
      Alert.alert('Please input username');
    } else {
      navigation.navigate('ForgotPassword', { username });
    }
  };

  return (
    <View style={styles.container}>
      {/* Combined Layout */}
      <View style={styles.combinedLayout}>
        <Text style={styles.simpleTextView}>
          Learn Acceptance and commitment therapy for free!
        </Text>
        <View style={styles.centeredLayout}>
          <Image
            style={styles.imageView2}
            source={require('../assets/images/design_photoroom.png')}
          />
          <Text style={styles.title}>ClearMind</Text>
        </View>
        <Text style={styles.textView2}>
          On-demand help for overcoming procrastination
        </Text>
      </View>

      {/* Wave Images */}
      <View style={styles.waveContainer}>
        <Image
          style={[styles.waveImage, { bottom: 60 }]}
          source={require('../assets/images/dark_green.png')}
        />
        <Image
          style={[styles.waveImage, { bottom: 45 }]}
          source={require('../assets/images/medium_green.png')}
        />
        <Image
          style={[styles.waveImage, { bottom: 30 }]}
          source={require('../assets/images/light_green.png')}
        />
      </View>

      {/* Input Fields and Buttons */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FED7',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  combinedLayout: {
    marginTop: 80,
    alignItems: 'center',
  },
  simpleTextView: {
    paddingTop: 20,
    paddingHorizontal: 16,
    textAlign: 'center',
    fontSize: 20,
    color: '#007F5F',
    fontWeight: 'bold',
  },
  centeredLayout: {
    alignItems: 'center',
    marginTop: 10,
  },
  imageView2: {
    width: 253,
    height: 207,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
    color: '#007F5F',
    fontSize: 28,
    paddingBottom: 5,
    fontFamily: Platform.OS === 'ios' ? 'Open Sans' : 'Open Sans',
  },
  textView2: {
    textAlign: 'center',
    paddingHorizontal: 16,
    color: '#007F5F',
    fontSize: 20,
    marginTop: 10,
  },
  waveContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  waveImage: {
    position: 'absolute',
    width: width,
    resizeMode: 'stretch',
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    width: 313,
    height: 36,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#878181',
    marginRight: 16,
    marginTop: 5,
  },
  buttonLogin: {
    backgroundColor: '#007F5F',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 80,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerText: {
    color: '#007F5F',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});