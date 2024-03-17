import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}