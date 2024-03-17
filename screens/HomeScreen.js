import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity set to 0

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1, // Final opacity set to 1
          duration: 2000, // Adjust the duration as needed
          useNativeDriver: true,
        }
      ).start();
    };

    fadeIn();
  }, []);

  useEffect(() => {
    // Loop animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false, // 'useNativeDriver' must be false for color animations
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [animatedValue]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['skyblue', 'white'], // Example colors; change these to your desired colors
  });

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground
        source={require('../assets/dimensionDots.gif')} // Replace with your actual image file
        resizeMode="cover" // or 'contain' depending on your need
        style={styles.imageBackground}
      >
        <Animated.View style={[styles.container, { backgroundColor }]}>
          <Image source={require('../assets/curve-logo-transparent.png')} style={styles.headerImage} />
          <Text style={styles.title}>Curve</Text>
          <Text style={styles.subtitle}>Continuous Growth,</Text>
          <Text style={styles.subtitle1}>Accessible To All.</Text>
      
          <View style={styles.content}>
            <View style={styles.buttonsContainer}>
              <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Sign Up')}
                buttonStyle={styles.button}
              />
              <Button
                title=" Login "
                onPress={() => navigation.navigate('Login')}
                buttonStyle={styles.button}
              />
            </View>
          </View>
      
        </Animated.View>
      </ImageBackground>
   
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 200, // Adjust this value to create space for the footer
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensure it covers the whole screen
    height: '100%', // Ensure it covers the whole screen
  },
  title: {
    fontSize: 100, // Makes the text bigger
    fontWeight: 'bold', // Makes the text thicker
    color: '#000', // Makes the text color black for darkness
    textAlign: 'center', // Centers the heading
    paddingTop: 200,
    paddingBottom: 20,
    marginBottom: -20,
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 0,
    fontFamily: 'Menlo',
  },
  subtitle1: {
    fontSize: 15,
    marginBottom: 80,
    fontFamily: 'Menlo',
  },
  headerImage: {
    width: 120,
    height: 100,
    marginTop: 200,
    marginBottom: -220, 
    
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60, // Adjust the height of the footer
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Background color of the footer
    borderTopWidth: 1, // Add a border to separate footer from content
    borderTopColor: '#ccc', // Border color
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Menlo',
  },
  buttonsContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 200, 
    marginBottom: 10, 
    marginHorizontal: 10,
  },
});

export default HomeScreen;
