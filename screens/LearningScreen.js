import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LearningScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Learning Material Will Go Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 20,
  },
});

export default LearningScreen;
