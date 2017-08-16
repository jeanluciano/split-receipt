import axios from 'axios';
import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import secrets from '../../secrets';

const TEST_DESTINATION = process.env.TWILIO_TEST_JASON_DESTINATION;
const TEST_AMOUNT = process.env.TWILIO_TEST_AMOUNT;

class SendText extends Component {
  constructor() {
    super();
    this.onPayPalSignUp = this.onPayPalSignUp.bind(this);
    this.onSMS = this.onSMS.bind(this);
  }

  onPayPalSignUp(navigate) {
    navigate('paypalMeHandle');
    const url = 'https://www.paypal.me';
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err));
  }

  onSMS(navigate) {
    // grab payPalMe handle
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId)
      .once('value')
      .then(snapshot => snapshot.val().payPalMe)
      .then((payPalMe) => {
        // need to loop through each endpoint
        return axios.post('http://localhost:8000/api/payPalMe/', {
          destinationNumber: TEST_DESTINATION,
          payPalMe,
          amount: TEST_AMOUNT,
        });
      })
      .catch(console.err);
    navigate('Main');
  }

  render() {
    return (
      <View className="center">
        <Text>Review the your splits</Text>
        <Button
          title="Back"
          color="#841584"
          onPress={() => this.onPayPalSignUp(this.props.navigation.navigate)}
        />
        <Button
          title="Send // Cost $ from trial account!"
          color="#841584"
          onPress={() => this.onSMS(this.props.navigation.navigate)}
        />

      </View>
    );
  }
}

export default SendText;
