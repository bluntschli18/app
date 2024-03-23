import React from 'react';
import "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet, Text, View } from 'react-native';
import SupportScreen from './Screens/SupportScreen';
import MyProfileScreen from './Screens/MyProfileScreen';
import Bank from "./components/Bank";
import Transaction from "./components/Transaction";
import PersonalInfo from './components/PersonalInfo';
import DataAndPrivacy from './components/DataAndPrivacy';
import EditScreen from './inputDetails/EditScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MyProfile'
      >

        <Stack.Screen
          name='MyProfile'
          component={MyProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Edit'
          component={EditScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Bank"
          component={Bank}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DataAndPrivacy"
          component={DataAndPrivacy}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Support'
          component={SupportScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },


});
