/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {StyleSheet, View, Text } from 'react-native';
 import LoginScreen from './LoginScreen';
 import SignUp from './SignUp';
 import ListScreen from './ListScreen';

 import { StackNavigator } from 'react-navigation'; 



 const RootStack = StackNavigator(
 {
  LoginScreen: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUp,
  },

  ListScreen: {
    screen: ListScreen,
  },
  
},
{
  initialRouteName: 'LoginScreen',
});



 export default class App extends React.Component {
  render() {
    return (<RootStack />
      );
  }
}
