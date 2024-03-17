import Button from '../components/Button';
import React from 'react';
import { View, Text } from 'react-native';

const MathTest = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Math Test</Text>
    </View>
  );
}

export default MathTest;