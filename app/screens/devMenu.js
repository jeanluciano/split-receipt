import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from 'firebase';
import Nav from './components/nav';
import { connect } from 'react-redux';
import { login } from '../redux/auth';


const DevMenu = (props) => {
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
        onPress={() => props.handleLogIn(
          "jason@one.com",
          "Jasonone",
          props.navigation.navigate
        )}
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



const mapLogin = (state) => {
  return {
    // error: state.user.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleLogIn(email, password, navigate) {
      console.log('MAP DISPATCH', login)
      dispatch(login(email, password, navigate));
    },
  };
};

export default connect(mapLogin, mapDispatch)(DevMenu);

