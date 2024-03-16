import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StartUpScreen = ({ navigation }) => {

  const handleLongPress = () => {
    navigation.navigate('Learning Screen'); // Navigate to a different screen when holding down the bubble
  };
  const handleSmallBubblePress = () => {
    navigation.navigate('Skill Creation'); // Navigate to a different screen when pressing the small bubble
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={handleSmallBubblePress} style={styles.smallBubble}>
    <Text style={styles.bubbleText}>+</Text>
  </TouchableOpacity>
 
      <TouchableOpacity onPress={handleLongPress} style={styles.bubble}>
        <Text style={styles.bubbleText}>Hours</Text>
      </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallBubble: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'skyblue',
    borderRadius: 20, // Make the border radius smaller for a smaller bubble
    padding: 10,
    zIndex: 1, // Ensure the small bubble appears on top
  },
  bubble: {
    backgroundColor: 'skyblue',
    borderRadius: 800, // Make the border radius larger for a more rounded shape
    padding: 100, // Increase padding to make the bubble larger
  },
  bubbleText: {
    fontSize: 24, // Increase font size for better visibility
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default StartUpScreen;
