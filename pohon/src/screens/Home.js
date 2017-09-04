import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { set_user } from '../actions'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      name: ''
    }
  }
  
  static navigationOptions = {
    header: null
  }
  
  set_nama(data){
    const { navigate } =this.props.navigation
    
    this.props.set_nama(data)
    navigate('Grow')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome! {this.state.username}</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="username"
            placeholderTextColor= 'rgba(255,255,255,0.7)'
            underlineColorAndroid='transparent'
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            style={styles.input}
          />
          
          <TextInput
            placeholder="Treename"
            placeholderTextColor= 'rgba(255,255,255,0.7)'
            underlineColorAndroid='transparent'
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            style={styles.input}
          />
          
          <TouchableOpacity onPress={() => this.set_nama(this.state)} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
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

const mapDispatchToProps = (dispatch) => {
  return {
    set_nama: (data) => dispatch(set_user(data))
  }
}

export default connect(null, mapDispatchToProps)(Home)