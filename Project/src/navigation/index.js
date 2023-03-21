import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import SignInScreen from '../Screen/SignInScreen';
import SignUpScreen from '../Screen/SignUpScreen';
import ConfirmEmailScreen from '../Screen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screen/ForgotPasswordScreen';
import NewPasswordScreen from '../Screen/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown:false}}>
        <Stack.Screen name='Sign in' component={SignInScreen} ></Stack.Screen>
        <Stack.Screen name = 'Sign up' component={SignUpScreen} ></Stack.Screen>
        <Stack.Screen name = 'ConfirmEmail' component={ConfirmEmailScreen}></Stack.Screen>
        <Stack.Screen name = 'ForgotPassword' component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name = 'NewPassword' component={NewPasswordScreen}></Stack.Screen>
        <Stack.Screen name = 'Home' component={HomeScreen} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation