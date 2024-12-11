// CustomButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
