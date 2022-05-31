
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Pressable,} from 'react-native';
import MapView from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from "./screens/MapScreen.js";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NewsScreen from './screens/NewsScreen.js';
import MyDrawer from './screens/ProfileScreen.js';
import RootNavigator from './navigation/RootNavigator.js';
import NotificationsScreen from './screens/NotificationsScreen.js';
import CategoryScreen from './screens/CategoryScreen.js';
import FontsScreen from './screens/FontsScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from 'kura/screens/DetailScreen.js';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Stack.Navigator headerMode='none' initialRouteName='MapScreen'>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
}
const HomeScreen = ()  =>{
  return (

    <View>

    </View>
  )

}
const SettingsScreen = ()  =>{
  return (

    <View></View>
  )

}
const SettingsScreen1 = ()  =>{
  return (

    <View></View>
  )

}
const SettingsScreen2 = ()  =>{
  return (

    <View></View>
  )

}
function App() {
  return (
    <NavigationContainer >
        <Tab.Navigator       tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor:'white',
        style:{
          backgroundColor:'#191C21',
          borderRadius:30,
          elevation:0,
          position:"absolute",
          height:90
        },
        showLabel: false,

      }}>
      <Tab.Screen name="Home" component={Root}
           options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="earth" color={color} size={50} />
          )}}/>
      <Tab.Screen name="Settings" component={NotificationsScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="camera-outline" color={color} size={48} />
        )}}
      />
            <Tab.Screen name="NewsScreen" component={RootNavigator} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="newspaper-o" color={color} size={46} />
        )}}
      />
            <Tab.Screen name="ProfileScreen" component={MyDrawer} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-circle-o" color={color} size={46} />
        )}}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App