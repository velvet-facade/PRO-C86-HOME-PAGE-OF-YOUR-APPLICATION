import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';
import { Card } from 'react-native-paper';

const broccoliImg = require('../assets/broccoli.png');

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ marginTop: '4rem' }}>
        <View>
          <Text style={styles.appName}>AFresh Vegetables</Text>
          <Text style={{ textAlign: 'center' }}>E-Grocery Market</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={broccoliImg} style={styles.broccoli} />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => this.setState({ email: text })}
            placeholder={'Enter Email'}
            placeholderTextColor={'#0f5c10'}
            autoFocus
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ password: text })}
            placeholder={'Enter Password'}
            placeholderTextColor={'#0f5c10'}
            secureTextEntry
            style={styles.textInput}
          />
        </View>
        <View style={{ alignItems: 'center', marginTop: '1rem' }}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={
              (console.log(this.state.email), 
               console.log(this.state.password))
            }>
            <Text style={(styles.buttonText, { textAlign: 'center' })}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  imgContainer: {
    alignItems: 'center',
  },
  broccoli: {
    width: 150,
    height: 150,
    marginTop: '-3rem',
  },
  loginBtn: {
    width: '5rem',
    height: '2.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0DECA',
    borderRadius: 5,
   // border: 'solid',
    borderWidth: 0.1,
  },
  appName: {
    marginTop: -100,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textInput: {
    backgroundColor: '#C7D36F',
    height: '2rem',
    textAlign: 'center',
    borderRadius: 4,
    borderWidth: 1,
    marginTop: '1rem',
  },
});
