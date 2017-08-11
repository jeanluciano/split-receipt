import React, { Component } from 'react';
import { View, Text, TextInput, Button, Linking, TouchableHighlight, Modal } from 'react-native';
import Swiper from 'react-native-swiper';
import firebase from 'firebase';

class Login extends Component {
  constructor() {
    super();
    this.onLogIn = this.onLogIn.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.state = {
      emailText: '',
      passwordText: '',
      modalVisible: false,
      paypalMeHandleString: '',
    };
  }

  onLogIn(email, password, navigate, setModalVisible) {
    const login = async function (email, password) { 
      try {
        await firebase.auth()
          .signInWithEmailAndPassword(email, password);
        console.log("Logged In!");
        // Navigate to the Home page
        console.log('LOGIN', navigate)
        navigate('LinkAccounts')
        // setModalVisible(true);

      } catch (error) {
        console.log(error.toString())
      }
    }
    login(email, password);
  }

  onSignUp(email, password, navigate, setModalVisible) {
    const signup = async function (email, password) {
      // console.log(email, password);
      try {
        await firebase.auth()
          .createUserWithEmailAndPassword(email, password);
        console.log("Account created");
        // Navigate to the Home page, the user is auto logged in
        navigate('LinkAccounts');
        // setModalVisible(true);
      } catch (error) {
          console.log(error.toString())
      }
    }
    signup(email, password);
  }

  onSendText() {
    // 13125613496
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
    console.log(this.props);

  }

  componentDidMount() {
    this.setState({modalVisible: false});
  }

  onPayPalSignUp(navigate) {
    const url = 'https://www.paypal.me/grab?locale.x=en_US&country.x=US';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  render(props) {
    return (
      <View className="center">
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
          onPress={() => this.onLogIn(
            this.state.emailText,
            this.state.passwordText,
            this.props.navigation.navigate,
            this.setModalVisible
          )}
        ></Button>
        <Button
          title="Sign Up"
          color="#841584"
          onPress={() => this.onSignUp(
            this.state.emailText,
            this.state.passwordText,
            this.props.navigation.navigate,
            this.setModalVisible
          )}
        ></Button>
      </View>
    );
  };
}

export default Login;