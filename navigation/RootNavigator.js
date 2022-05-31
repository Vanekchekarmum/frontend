import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import NewsScreen from '../screens/NewsScreen';
import DetailScreen from '../screens/DetailScreen';
import MapScreen from '../screens/MapScreen';
const Stack = createSharedElementStackNavigator();
const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress
      }
    };
  }
};

export default function RootNavigator() {
  return (
      <Stack.Navigator headerMode='none' initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={NewsScreen} />
        <Stack.Screen name='MapScreen' component={MapScreen}/>
        <Stack.Screen name='DetailScreen' component={DetailScreen} options={() => options} />
      </Stack.Navigator>
  );
}