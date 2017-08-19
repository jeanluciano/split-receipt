import React, { Component } from 'react';
import { View, Text, TextInput, Button, Linking, TouchableHighlight } from 'react-native';
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
