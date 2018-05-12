import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import MyApp from './components/MyApp.js';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import { Font } from 'expo';

export default class App extends React.Component {

  componentDidMount() {
    Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/zahra.ttf'),
    });
  }

  render() {
    return (
        <NativeRouter>
      		<ImageBackground source={{uri:'http://bdfjade.com/data/out/65/5716104-gradient-wallpaper.png'}} style={{height: null, width: null, flex: 1}} >
				<MyApp />
			</ImageBackground>
        </NativeRouter>
    );
  }
}

