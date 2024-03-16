// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View} from 'react-native';
// import Task from './components/Task';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style = {styles.tasksWrapper}>
//         <Text style = {styles.sectionTitle}>Atoms.</Text>
//         <View style = {styles.items}>
//         <Task text = {'Task 1'}/>
//         <Task text = {'Task 2'}/>

//       </View>

//      </View>

//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E8EAED',
//   },
//   tasksWrapper: {
//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//   },
//   items: {},
// });


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}