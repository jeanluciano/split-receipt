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
      givenNameText: '',
      familyNameText: '',
      form: 'LOGIN',
    };
  }

  render() {
    const user = this.props.user
    if (user.payPalMe) this.props.navigation.navigate('Camera');
    else if (user.id) this.props.navigation.navigate('LinkAccounts');
    return (
      <View style={masterStyle.body} >
        {(this.state.form === 'SIGNUP')
          ? (<View>
            <Text>First Name</Text>
            <TextInput
              className="givenName"
              style={masterStyle.textInput}
              onChangeText={givenNameText => this.setState({ givenNameText })}
              value={this.state.givenNameText}
            />
            <Text>Last Name</Text>
            <TextInput
              className="email"
              style={masterStyle.textInput}
              onChangeText={familyNameText => this.setState({ familyNameText })}
              value={this.state.familyNameText}
            />
          </View>)
          : (<View />)
        }
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
          onPress={() => {
            (this.state.form === 'LOGIN')
              ? this.props.handleLogIn(
                this.state.emailText,
                this.state.passwordText,
                this.props.navigation.navigate)
              : this.setState({ form: 'LOGIN' })
          }}
        />
        <Button
          title="Sign Up"
          margin={3}
          color={colors.buttonColor}
          backgroundColor={colors.buttonBackground}
          borderRadius={10}
          onPress={() => {
            (this.state.form === 'SIGNUP')
              ? this.props.handleSignUp(
                this.state.emailText,
                this.state.passwordText,
                this.state.givenNameText,
                this.state.familyNameText)
              : this.setState({ form: 'SIGNUP' })
          }}
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
    handleLogIn(email, password) {
      dispatch(login(email, password));
    },
    handleSignUp(email, password, givenName, familyName) {
      dispatch(signup(email, password, givenName, familyName));
    },
  };
};

export default connect(mapLogin, mapDispatch)(Login);

const styles = StyleSheet.create({});
