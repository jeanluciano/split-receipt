import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
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
      <LinearGradient colors={colors.splitGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1, backgroundColor: '#374355' }}>

      <View style={styles.form}>
        {(this.state.form === 'SIGNUP')
          ? (<View>
          <Text style={styles.text}>
            First Name</Text>
            <TextInput
              className="givenName"
              style={styles.input}
              onChangeText={givenNameText => this.setState({ givenNameText })}
              value={this.state.givenNameText}
            />
            <Text style={styles.text}>
              Last Name</Text>
            <TextInput
              className="email"
              style={styles.input}
              value={this.state.familyNameText}
            />
          </View>)
          : (<View />)
        }
          <Text style={styles.text}>
            Email
          </Text>
        <TextInput
          className="email"
          style={styles.input}
          onChangeText={emailText => this.setState({ emailText })}
          value={this.state.emailText}
        />
          <Text style={styles.text}>
        Password</Text>
        <TextInput
          className="password"
          style={styles.input}
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
          color={colors.splitWhite}
          backgroundColor="transparent"
          borderRadius={10}
          style={styles.loginButton}
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
          color={colors.splitBackground2}
          backgroundColor={colors.splitGold}
          style={styles.signupButton}
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
      </LinearGradient>
    );
  }
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

const styles = StyleSheet.create({
  input: {
    color: 'white',
    height: 30,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
  },
  form: {
    padding: '5%',
    paddingTop: '20%',
  },
  text: {
    color: colors.splitGold,
    fontSize: 20,
    backgroundColor: 'transparent',
    paddingTop: '3%',
  },
  loginButton: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  signupButton: {
    marginLeft: '10%',
    marginRight: '10%',
  },
});
