import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//import login screen
//import LoginScreen from './screens/Login'

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return(
      console.log('hello world')
    )
  }
}