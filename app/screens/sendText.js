import secrets from '../../secrets';
import axios from 'axios';import React, { Component } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import firebase from 'firebase';
const TEST_AMOUNT = '15.22';
const TEST_JASON_DESTIONATION = '+14126097288'
const TEST_RAJ_DESTINATION = '+12487220241';
const TEST_DESTINATION = TEST_RAJ_DESTINATION;

class SendText extends Component {
  constructor() {
    super();
    this.onPayPalSignUp = this.onPayPalSignUp.bind(this);
    this.onSMS = this.onSMS.bind(this);
  }

  onPayPalSignUp(navigate) {
    navigate('paypalMeHandle');
    const url = 'https://www.paypal.me/grab?locale.x=en_US&country.x=US';
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err));
  }

  onSMS(navigate) {
    // grab payPalMe handle
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId)
      .once('value')
      .then(snapshot => snapshot.val().payPalMe)
      .then( payPalMe => {
        // need to loop through each endpoint
        console.log('http://localhost:8000/api/payPalMe/', { 
          destinationNumber: TEST_DESTINATION,
          payPalMe,
          amount: TEST_AMOUNT
        })
        return axios.post('http://localhost:8000/api/payPalMe/', { 
          destinationNumber: TEST_DESTINATION,
          payPalMe,
          amount: TEST_AMOUNT
        })
      })
      .catch(console.err);
    navigate('Main');
  }

  render(props) {
    return (
      <View className="center">
        <Text>Review the your splits</Text>
        <Button
          title="Back"
          color="#841584"
          onPress={() => this.onPayPalSignUp(this.props.navigation.navigate)}
        ></Button>
        <Button
          title="Send // Cost $ from trial account!"
          color="#841584"
          onPress={() => this.onSMS(this.props.navigation.navigate)}
        ></Button>

      </View>
    );
  }
}

export default SendText;
