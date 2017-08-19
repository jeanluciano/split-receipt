import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
    const user = this.props.user
    if(user.id) this.props.navigation.navigate('Camera'); // 
    return (
      <View style={styles.screen} >
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
        {user.code && 
          <View style={styles.warning}>
            <Text style={styles.warningText}>{user.message}</Text>
          </View>
        }
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
    user: state.user,
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

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  screen: {
    padding: 5,
    paddingTop: 20,
    backgroundColor: '#ebeef0',
  },
  table: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  warning: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#FFCCCB',
  },
  warningText: {
    color: '#AA5556',
  }
});
