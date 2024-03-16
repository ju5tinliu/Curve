import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  const width = `${progress * 100}%`;

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#76a9fa',
    borderRadius: 10,
  },
});

export default ProgressBar;
