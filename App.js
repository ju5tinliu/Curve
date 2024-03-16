import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import StartUpScreen from './screens/StartUpScreen';
import LearningScreen from './screens/LearningScreen';
import SkillCreationScreen from './screens/SkillCreationScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home"> */}
      <Stack.Navigator screenOptions={{ headerShown: false }} // Hide the header for all screens
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home Page" component={StartUpScreen} />
        <Stack.Screen name="Learning Screen" component={LearningScreen} />
        <Stack.Screen name="Skill Creation" component={SkillCreationScreen} />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}