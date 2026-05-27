/**
 * Day 11: React Native Navigation
 *
 * The app-level navigator decides which screen is shown and provides
 * navigation and route props to each registered screen component.
 */

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';

// A stack places each new screen above the previous screen, like pages.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer keeps track of the current screen and navigation history.
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Navigation Basics' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Lesson Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
