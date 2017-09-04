import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'

export default class Grow extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Grow!</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#2ecc71'
  },
  title: {
    color: '#fff',
    opacity: 0.8,
    fontWeight: '900'
  },
  titleContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  formContainer: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 19,
    color: '#fff',
    paddingHorizontal: 15
  },
  buttonContainer: {
    paddingVertical: 15,
    backgroundColor: '#27ae60'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    opacity: 0.8
  }
})