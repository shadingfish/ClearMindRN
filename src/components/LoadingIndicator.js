// LoadingIndicator.js

import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
