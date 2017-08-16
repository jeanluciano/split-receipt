import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Nav from './components/nav';

class DevMenu extends Component {

  onDummy() {
    const login = async function(email, password) { 
      try {
        await firebase.auth()
          .signInWithEmailAndPassword(email, password);
        // Navigate to the Home page
        navigate('LinkAccounts')

      } catch (error) {
        console.log(error.toString())
      }
      login("jason@one.com", "Jasonone");
    }
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View className="center" style={{paddingTop: '20%'}}>
        <Text>DevMenu.js works</Text>
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
          onPress={() => this.onDummy}
        />
        <Button
          title="Camera"
          color="#841584"
          onPress={() => navigate('Camera')}
        />
        <Button
          title="Drag and Drop"
          color="#841584"
          onPress={() => navigate('Dragndrop')}
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
