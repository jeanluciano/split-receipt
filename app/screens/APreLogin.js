import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { login, signup } from '../redux/auth';
import { masterStyle, colors } from '../values/stylesheet';
import Splash from './components/Login/Splash';
import { height } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      showPagination: true,
      emailText: '',
      passwordText: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(emailText){
    this.setState({ emailText, showPagination: false });
  }

  handlePassword(passwordText){
    this.setState({ passwordText, showPagination: false });
  }

  render() {
    const { navigation, user } = this.props;
    if(user.payPalMe) navigation.navigate('Camera');
    else if(user.id) navigation.navigate('LinkAccounts');

    return (
      <LinearGradient colors={['#232526', '#414345']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1, backgroundColor: '#374355' }}>
      {
        this.state.showPagination ? <Splash style={{height: height(50)}}/> : <View style={{height: height(50)}}><Text style={styles.titleText}> Split.</Text><Text style={styles.descriptionText}> Welcome back!</Text></View>
      }

        <View style={{height: height(50)}}>
          <View style={styles.emailForm}>
          <FormInput
            placeholder={'e-mail'}
            placeholderTextColor='#a9b9ca'
            inputStyle={{color: '#fff'}}
            onChangeText={ emailText => this.handleEmail(emailText) }
            value={this.state.emailText}
          />
          </View>
          <View style={styles.passForm}>
          <FormInput
            placeholder={'password'}
            placeholderTextColor='#a9b9ca'
            secureTextEntry
            inputStyle={{color: '#fff'}}
            onChangeText={ passText => this.handlePassword(passText) }
            value={this.state.passwordText}
          />
          </View>
          {user.code &&
            <View style={masterStyle.warningView}>
              <Text style={masterStyle.warningText}>{user.message}</Text>
            </View>
          }
          <Button
            title="Log In"
            color="#374355"
            backgroundColor="#D7CABD"
            borderRadius={10}
            style={styles.loginButton}
            onPress={() => this.props.handleLogIn(
              this.state.emailText,
              this.state.passwordText,
              this.props.navigation.navigate
            )}
          />
          <Button
            title="Sign Up"
            backgroundColor="transparent"
            style={styles.signupButton}
            borderRadius={10}
            onPress={() => navigation.navigate('Signup')}
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
    paddingBottom: '20%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  emailForm: {
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: '10%',
  },
  passForm: {
    marginLeft: '10%',
    marginRight: '10%',
    paddingBottom: '8%',
  },
  inputLabel: {
    fontFamily: 'Arial',
    fontSize: 8,
  },
  titleText: {
    color: '#fff',
    paddingTop: '20%',
    margin: 0,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 60,
  },
  descriptionText: {
    color: '#a9b9ca',
    margin: 0,
    paddingTop: '4%',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
