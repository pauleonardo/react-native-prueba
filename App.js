import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';


import routes from './src/routes';


export default class App extends Component {
  render() {
    return (
        <Router scenes={routes} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
