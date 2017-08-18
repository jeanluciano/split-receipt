import React, { Component } from 'react';
import { View, Text, TextInput, Button, Linking, TouchableHighlight } from 'react-native';
// import firebase from 'firebase';
import { connect } from 'react-redux';
import { login, signup } from '../redux/auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailText: '',
      passwordText: '',
    };
  }

  // onLogIn(email, password, navigate) {
  //   const login = async function (email, password) {
  //     try {
  //       await firebase.auth()
  //         .signInWithEmailAndPassword(email, password);
  //       // Navigate to the Home page
  //       navigate('LinkAccounts')

  //     } catch (error) {
  //       console.log(error.toString())
  //     }
  //   }
  //   login(email, password);
  // }

  // onSignUp(email, password, navigate) {
  //   const signup = async function (email, password) {
  //     try {
  //       await firebase.auth()
  //         .createUserWithEmailAndPassword(email, password)
  //         .catch(console.err);
  //       // Navigate to the Home page, the user is auto logged in
  //       navigate('LinkAccounts');
  //     } catch (error) {
  //         console.log(error.toString())
  //     }
  //   }
  //   signup(email, password);
  // }

  render() {
    return (
      <View className="center">
        <Text>Email</Text>
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
        <Text>Password</Text>
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
          onPress={() => this.props.handleLogIn(
            this.state.emailText,
            this.state.passwordText,
            this.props.navigation.navigate
          )}
        />
        <Button
          title="Sign Up"
          color="#841584"
          onPress={() => this.props.handleSignUp(
            this.state.emailText,
            this.state.passwordText,
            this.props.navigation.navigate
          )}
        />
      </View>
    );
  };
}

const mapLogin = (state) => {
  return {
    // error: state.user.error,
  };
};

const mapDispatch = (dispatch) => {
  console.log('MAP DISPATCH', login)
  return {
    handleLogIn(email, password, navigate) {
      dispatch(login(email, password, navigate));
    },
    handleSignUp(email, password, navigate) {
      dispatch(signup(email, password, navigate));
    },
  };
};

export default connect(mapLogin, mapDispatch)(Login);
