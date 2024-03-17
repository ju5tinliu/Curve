import React, { useState, useRef} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StartUpScreen = ({ navigation }) => {
  const bubbleAnimatedValue = new Animated.Value(0);
  // State to track the scale of each bubble
  // const [bubbleScales, setBubbleScales] = useState({
  //   'Rock Climbing': 0,
  //   'Math': 0,
  //   'Guitar': 0,
  //   'Drum': 0
  // });
  // Animated values for each bubble
  const rockClimbingScale = useRef(new Animated.Value(1)).current;
  const mathScale = useRef(new Animated.Value(1)).current;
  const guitarScale = useRef(new Animated.Value(1)).current;
  const drumScale = useRef(new Animated.Value(1)).current;

  
  const floatAnimation = (animatedValue) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };
  
  React.useEffect(() => {
    floatAnimation(bubbleAnimatedValue);
  }, []);

  const handleSmallBubblePress = () => {
    navigation.navigate('Skill Creation');
  };

  const bubbles = [
    { id: 1, title: 'Rock Climbing', navigationTarget: 'Rock Climbing', side: 'left', color: 'black' },
    { id: 2, title: 'Math', navigationTarget: 'Math Screen', side: 'right' },
    { id: 3, title: 'Guitar', navigationTarget: 'Learning Screen', side: 'left' },
    { id: 4, title: 'Drum', navigationTarget: 'Learnning Screen', side: 'right' },
  ];

  const handleBubblePress = (navigationTarget) => {
    navigation.navigate(navigationTarget);
  };

  const bubbleStyle = bubbleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '10%']
  });

  return (
    <ImageBackground
      source={require('../assets/curveAppBackground.png')}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {bubbles.map((bubble, index) => (
          <TouchableOpacity
            key={bubble.id}
            onPress={() => handleBubblePress(bubble.navigationTarget)}
            style={[
              styles.bubble,
              bubble.side === 'left' ? styles.leftBubble : styles.rightBubble,
              { backgroundColor: index % 2 === 0 ? 'pink' : 'lightgreen' },
            ]}
          >
            <Text style={styles.bigbubbleText}>{bubble.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <TouchableOpacity onPress={handleSmallBubblePress} style={styles.smallBubble}>
        <View style={styles.inlineBubbleContainer}>
          <View style={styles.plusBubble}>
            <Text style={styles.bubbleText}>+</Text>
          </View>
          <Text style={styles.insideBubble}>Skills</Text>
        </View>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="refresh" size={24} color="black" />
          <Text style={styles.footerText}>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Coin Screen')} style={styles.footerItem}>
        <FontAwesome name="trophy" size={24} color="gold" />
        <Text style={styles.footerText}>Prize</Text>
      </TouchableOpacity>
      </View>

      {/* Prize icon with text */}

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingTop: 100,
  },
  smallBubble: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    padding: 10,
    zIndex: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Menlo',
  },
  bubble: {
    height: 300,
    width: 300,
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
  },
  leftBubble: {
    alignSelf: 'flex-start',
    marginLeft: 0,
  },
  rightBubble: {
    alignSelf: 'flex-end',
    marginRight: 0,
  },
  bubbleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  inlineBubbleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusBubble: {
    backgroundColor: 'black',
    borderRadius: 15,
    width: 40,
    height: 30,
    alignItems: 'center',
    marginRight: 0,
  },
  insideBubble: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: 'skyblue',
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  bigbubbleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
  },
  prizeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
  },
  prizeText: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
});

export default StartUpScreen;
