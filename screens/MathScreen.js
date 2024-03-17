import Button from '../components/Button';
import React from 'react';
import { View, Text } from 'react-native';

const MathScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Math Learning Screen</Text>
      <Button
        title="Test your Knowledge"
        onPress={() => navigation.navigate('Math Test')}
      />
    </View>
  );
}

export default MathScreen;