import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { login, signup } from '../redux/auth';
import { masterStyle, colors } from '../values/stylesheet';
import Splash from './Splash';

class Login extends Component {
  constructor() {
    super();
  }

  handleLoginPress() {

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#374355'}}>
        <Splash />
        <View style={{paddingBottom: '30%'}}></View>
        <Button
          title="Log In"
          margin={3}
          backgroundColor={'#374355'}
          borderRadius={10}
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Sign Up"
          margin={3}
          backgroundColor={'#FFB6E5'}
          style={styles.signupButton}
          borderRadius={10}
          onPress={() => navigation.navigate('Signup')}
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
  signupButton: {
    paddingBottom: '20%',
    marginLeft: '10%',
    marginRight: '10%',
  }
});
