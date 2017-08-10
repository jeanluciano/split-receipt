import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase';

class Login extends Component {
  constructor() {
    super();
    this.onLogIn = this.onLogIn.bind(this);
    this.state = {
      emailText: '',
      passwordText: '',
    };
  }

  onLogIn(email, password) {
    const login = async function (email, password) { 
      try {
          await firebase.auth()
              .signInWithEmailAndPassword(email, password);
          console.log("Logged In!");
          // Navigate to the Home page

      } catch (error) {
          console.log(error.toString())
      }
    }
    login(email, password);
  }

  onSignUp(email, password) {
    const signup = async function (email, password) {
      // console.log(email, password);
      try {
          await firebase.auth()
              .createUserWithEmailAndPassword(email, password);
          console.log("Account created");
          // Navigate to the Home page, the user is auto logged in

      } catch (error) {
          console.log(error.toString())
      }

    }
    signup(email, password);
  }

  onVenmo() {

  }

  render(props) {
    return (
      <View className="center">
        <Text>YOU HAVE ARRIVED AT THE LOGIN SCREEN!</Text>
        <TextInput
          className="email"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            textAlign: 'center',
          }}
          onChangeText={emailText => this.setState({ emailText })}
          value={this.state.emailText}
        />
        <TextInput
          className="password"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            textAlign: 'center',
          }}
          onChangeText={passwordText => this.setState({ passwordText })}
          value={this.state.passwordText}
        />
        <Button
          title="Log In"
          color="#841584"
          onPress={() => this.onLogIn(this.state.emailText, this.state.passwordText)}
        ></Button>
        <Button
          title="Sign Up"
          color="#841584"
          onPress={() => this.onSignUp(this.state.emailText, this.state.passwordText)}
        ></Button>
        <Button
          title="Log In with Venmo"
          color="#841584"
          onPress={() => this.onVenmo(this.state.emailText, this.state.passwordText)}
        ></Button>

      </View>
    );
  };
}

export default Login;