/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import store from './src/store'
import { Provider } from 'react-redux'

import Home from './src/screens/Home'
import Grow from './src/screens/Grow'


const App = StackNavigator({
  Home: { screen: Home},
  Grow: { screen: Grow}
})

export default class pohon extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('pohon', () => pohon);
