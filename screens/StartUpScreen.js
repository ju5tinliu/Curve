import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Animated, ImageBackground } from 'react-native';

const StartUpScreen = ({ navigation }) => {
  const bubbleAnimatedValue = new Animated.Value(0); // Starting position

  const floatAnimation = (animatedValue) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1, // Move to the end position
          duration: 2000, // Duration of the animation
          useNativeDriver: true, // Use native driver for better performance
        }),
        Animated.timing(animatedValue, {
          toValue: 0, // Move back to the start position
          duration: 2000, // Duration of the animation
          useNativeDriver: true, // Use native driver for better performance
        }),
      ])
    ).start();
  };
  
  // Use useEffect to start the animation
  React.useEffect(() => {
    floatAnimation(bubbleAnimatedValue);
  }, []);

  const handleSmallBubblePress = () => {
    navigation.navigate('Skill Creation'); // Navigate to a different screen when pressing the small bubble
  };
  const bubbles = [
    { id: 1, title: 'Rock Climbing', navigationTarget: 'Rock Climbing', side: 'left' },
    { id: 2, title: 'Math', navigationTarget: 'Math Screen', side: 'right' },
    { id: 3, title: 'Guitar', navigationTarget: 'Learning Screen', side: 'left' },
    { id: 4, title: 'Drum', navigationTarget: 'Learnning Screen', side: 'right' },
    // Add more bubbles as needed
    // { id: 3, title: 'Another Screen', navigationTarget: 'Another Screen', side: 'left' },
    // Add as many bubbles as you need
  ];

  const handleBubblePress = (navigationTarget) => {
    navigation.navigate(navigationTarget);
  };

  const bubbleStyle = bubbleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '10%'] // Change values to move more or less
  });
  
  // When rendering your bubble, wrap it with Animated.View instead of View and apply the animated style
  <Animated.View
    style={[
      styles.bubble,
      { transform: [{ translateY: bubbleStyle }] } // This moves the bubble up and down
    ]}
  >
    {/* Bubble content */}
  </Animated.View>

  return (
    <ImageBackground
      source={require('../assets/curveAppBackground.png')} // Replace with your actual image file
      resizeMode="cover" // 'cover' is usually a good option for full screen backgrounds
      style={styles.imageBackground}
    >
    <ScrollView contentContainerStyle={styles.container} style={{flexGrow: 1}}>
      <TouchableOpacity onPress={handleSmallBubblePress} style={styles.smallBubble}>
  <View style={styles.inlineBubbleContainer}>
    <View style={styles.plusBubble}>
      <Text style={styles.bubbleText}>+</Text>
    </View>
    <Text style={styles.insideBubble}>Skills</Text>
  </View>
</TouchableOpacity>
      {bubbles.map((bubble, index) => (
        <TouchableOpacity
          key={bubble.id}
          onPress={() => handleBubblePress(bubble.navigationTarget)}
          style={[
            styles.bubble,
            bubble.side === 'left' ? styles.leftBubble : styles.rightBubble,
            // This alternates the background color for illustration; remove or adjust as needed
            { backgroundColor: index % 2 === 0 ? 'skyblue' : 'powderblue' },
          ]}>
          <Text style={styles.bigbubbleText}>{bubble.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1, // The style for your ImageBackground should have flex: 1 to fill the whole screen
  },
  // Make sure your container style for ScrollView content doesn't include flex: 1
  container: {
    justifyContent: 'center',
    paddingVertical: 200, // Adjust as needed for spacing
  },
  container: {
    justifyContent: 'center',
    paddingVertical: 200, // Adjust as needed for spacing
  },
  smallBubble: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    padding: 10,
    zIndex: 2, // Ensure the small bubble appears on top
  },
  bubble: {
    height: 300, // Set a fixed height
    width: 300, // Set a fixed width to maintain a circle shape
    borderRadius: 300, // This should be half of both the width and height to make it a perfect circle
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginVertical: 50,
  },
  leftBubble: {
    alignSelf: 'flex-start',
    marginLeft: 0, // Adjust based on your design requirements
  },
  rightBubble: {
    alignSelf: 'flex-end',
    marginRight: 0, // Adjust based on your design requirements
  },
  bubbleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
   
  },
  inlineBubbleContainer: {
    flexDirection: 'row', // Aligns children inline
    alignItems: 'center', // Vertically centers the inline elements
    justifyContent: 'center', // Horizontally centers the content
  
  },
  plusBubble: {
    backgroundColor: 'black', // Background color for the + bubble
    borderRadius: 15, // Half of width and height to make it a circle
    width: 40, // Width of the + bubble
    height: 30, // Height of the + bubble
    // justifyContent: 'center', // Center the "+" vertically
    alignItems: 'center', // Center the "+" horizontally
    marginRight: 0, // Margin between the + bubble and the Skills text
  },
  insideBubble: {
    
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: 'skyblue', // Optional: Set background color for the Skills part if needed
    paddingHorizontal: 10, // Padding around the Skills text
    borderRadius: 15, // Rounded corners for the Skills part
  },
  bigbubbleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default StartUpScreen;

