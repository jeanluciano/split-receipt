import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { login, signup } from '../redux/auth';
import { masterStyle, colors } from '../values/stylesheet'

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
    if(user.payPalMe) this.props.navigation.navigate('Camera');
    else if(user.id) this.props.navigation.navigate('LinkAccounts');
    return (
      <View style={masterStyle.body} >
        <Text>Email</Text>
        <TextInput
          className="email"
          style={masterStyle.textInput}
          onChangeText={emailText => this.setState({ emailText })}
          value={this.state.emailText}
        />
        <Text>Password</Text>
        <TextInput
          className="password"
          style={masterStyle.textInput}
          onChangeText={passwordText => this.setState({ passwordText })}
          value={this.state.passwordText}
        />
        {user.code && 
          <View style={masterStyle.warningView}>
            <Text style={masterStyle.warningText}>{user.message}</Text>
          </View>
        }
        <Button
          title="Log In"
          margin={3}
          color={colors.buttonColor}
          backgroundColor={colors.buttonBackground}
          borderRadius={10}
          onPress={() => this.props.handleLogIn(
            this.state.emailText,
            this.state.passwordText,
            this.props.navigation.navigate
          )}
        />
        <Button
          title="Sign Up"
          margin={3}
          color={colors.buttonColor}
          backgroundColor={colors.buttonBackground}
          borderRadius={10}
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

const styles = StyleSheet.create({});
