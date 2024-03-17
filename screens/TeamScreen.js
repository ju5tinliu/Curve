import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

const TeamScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(4);
  const fadeInAnim = new Animated.Value(0);

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(
        fadeInAnim,
        {
          toValue: 4, // Final opacity set to 1
          duration: 2000, // Adjust the duration as needed
          useNativeDriver: true,
        }
      ).start();
    };

    fadeIn();
  }, []);
  useEffect(() => {
    const fadeOut = () => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 3000, // Adjust the duration as needed
          useNativeDriver: true,
        }
      ).start(() => {
        navigation.navigate('Home'); // Transition to the home screen after fade out
      });
    };

    fadeOut();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeInAnim }]}>
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.content}>
        {/* Team Logo */}
        <Image
          source={require('../assets/curve-logo-transparent.png')} // Replace with your actual logo image
          style={styles.logo}
        />
        <Image
          source={require('../assets/line.png')} 
          style={styles.logo1}
        />
        {/* Team Name */}
        <Text style={styles.teamName}>Curve{'\n'}Development{'\n'}Inc.</Text>
      </View>
    </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // Adjust background color as needed
  },
  content: {
    flexDirection: 'row', // Display children horizontally
    alignItems: 'center',
  },
  logo: {
    width: 100, // Adjust logo width as needed
    height: 100, // Adjust logo height as needed
    resizeMode: 'contain',
  },
  logo1: {
    width: 10, // Adjust logo width as needed
    height: 80, // Adjust logo height as needed
    resizeMode: 'contain',
  },
  teamName: {
    fontSize: 24,
    marginLeft: 20, // Add spacing between logo and team name
    fontWeight: 'bold',
  },
});

export default TeamScreen;
