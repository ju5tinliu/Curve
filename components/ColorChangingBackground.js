import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
const ColorChangingBackground = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 5000, // Duration of one cycle (e.g., 5000ms)
            useNativeDriver: false, // Color changing must use non-native driver
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: false,
          }),
        ])
      ).start();
    }, [animatedValue]);
    const backgroundColor = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['blue', 'red'], // Start and end colors
        // Add more colors to create more complex transitions
      });
      return (
        <Animated.View style={[styles.container, { backgroundColor }]}>
          {/* Your content goes here */}
        </Animated.View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1, // Ensure the view fills the screen
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    
export default ColorChangingBackground;