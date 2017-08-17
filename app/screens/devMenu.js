import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from 'firebase';
import Nav from './components/nav';

class DevMenu extends Component {

  onDummy(navigate) {
    console.log('DUMMY LOG IN')
    const login = async function(email, password) { 
      try {
        await firebase.auth()
          .signInWithEmailAndPassword(email, password)
        // Navigate to the Home page
        navigate('DevMenu');

      } catch (error) {
        console.log(error.toString())
      }
    }
    login("jason@one.com", "Jasonone");
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View className="center" style={{paddingTop: '20%'}}>
        <Text>DevMenu</Text>
        <Button
          title="Log In"
          color="#841584"
          onPress={() => navigate('Login')}
        />
        <Button
          title="Send Text"
          color="#841584"
          onPress={() => navigate('SendText')}
        />
        <Button
          title="Main"
          color="#841584"
          onPress={() => navigate('Main')}
        />
        <Button
          title="Login with Dummy"
          color="#841584"
          onPress={() => this.onDummy(navigate)}
        />
        <Button
          title="Camera"
          color="#841584"
          onPress={() => navigate('Camera')}
        />
        <Button
          title="Stack"
          color="#841584"
          onPress={() => navigate('Stack')}
        />
        <Button
          title="Contacts"
          color="#841584"
          onPress={() => navigate('Contacts')}
        />
      </View>
    );
  }
};

export default DevMenu;
