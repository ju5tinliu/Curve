import Button from '../components/Button';
import React from 'react';
import { View, Text } from 'react-native';

const LearningScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Learning Screen</Text>
      <Button
        title="Test your Knowledge"
        onPress={() => navigation.navigate('Quiz Screen')}
      />
    </View>
  );
}

export default LearningScreen;

// <View style={styles.container}>
    // <TouchableOpacity onPress={handleHomePagePress} style={styles.smallBubble}>
    // <Text style={styles.bubbleText}>Home Page</Text>
    // </TouchableOpacity>