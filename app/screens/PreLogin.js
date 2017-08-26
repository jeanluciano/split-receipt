import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { login, signup } from '../redux/auth';
import { masterStyle, colors } from '../values/stylesheet';
import Splash from './components/Entry/Splash';
import { height } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailText: '',
      passwordText: '',
    };
  }

  render() {
    const { navigation, user } = this.props;
    if (user.payPalMe) navigation.navigate('Camera');
    else if (user.id) navigation.navigate('LinkAccounts');

    return (
      <LinearGradient colors={colors.splitGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1}}>
        <Splash style={{ height: height(80) }} />

        <View style={{ height: height(20) }}>
          <Button
            title="Sign Up"
            color={colors.splitBackground2}
            backgroundColor={colors.splitGold}
            style={styles.signupButton}
            borderRadius={10}
            onPress={() => navigation.navigate('Signup')}
          />
          <Button
            title="Log In"
            color={colors.splitWhite}
            backgroundColor="transparent"
            borderRadius={10}
            style={styles.loginButton}
            onPress={() => this.props.handleLogIn(
              this.state.emailText,
              this.state.passwordText,
              this.props.navigation.navigate('Login')
            )}
          />
        </View>
      </LinearGradient>
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

var styles = StyleSheet.create({


  loginButton: {
    marginLeft: '10%',
    marginRight: '10%',
  },

  signupButton: {
    marginLeft: '10%',
    marginRight: '10%',
  },
});
