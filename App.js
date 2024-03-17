import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TeamScreen from './screens/TeamScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import StartUpScreen from './screens/StartUpScreen';
import LearningScreen from './screens/LearningScreen';
import SkillCreationScreen from './screens/SkillCreationScreen';
import RockClimbingScreen from './screens/RockClimbingScreen';
import RockClimbingTest from './screens/RockClimbingTest';
import MathScreen from './screens/MathScreen';
import MathTest from './screens/MathTest';
import CurveCoinScreen from './screens/CurveCoinScreen';
import NextQuestion from './screens/NextQuestion';
import NextQuestion1 from './screens/NextQuestion1';
import NextQuestion2 from './screens/NextQuestion2';
import NextQuestion3 from './screens/NextQuestion3';
import Results from './screens/Results';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home"> */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Team Screen" component={TeamScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home Page" component={StartUpScreen} />
        <Stack.Screen name="Learning Screen" component={LearningScreen} />
        <Stack.Screen name="Skill Creation" component={SkillCreationScreen} />
        <Stack.Screen name="Rock Climbing" component={RockClimbingScreen} />
        <Stack.Screen name="Math Screen" component={MathScreen} />
        <Stack.Screen name="Math Test" component={MathTest} />
        <Stack.Screen name="RockClimbingTest" component={RockClimbingTest} />
        <Stack.Screen name="Coin Screen" component={CurveCoinScreen} />
        <Stack.Screen name="Next Question" component={NextQuestion} />
        <Stack.Screen name="Next Question 1" component={NextQuestion1} />
        <Stack.Screen name="Next Question 2" component={NextQuestion2} />
        <Stack.Screen name="Next Question 3" component={NextQuestion3} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
