import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import firebase from 'firebase';

class PayPalMe extends Component {
  constructor() {
    super();
    this.state = {
      paypalMeHandleString: '',
    };
    this.onSave = this.onSave.bind(this);
  }

  onSave(navigate, payPalMe) {
    // update firebase
    const userId = firebase.auth().currentUser.uid
    firebase.database().ref()
      .child('users')
      .child(userId).set({payPalMe});
    navigate('LinkAccounts');
  }

  render(props) {
    return (
      <View className="center">
        <Text>Enter your PayPal.me</Text>
        <TextInput
          className="paypalMeHandle"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            textAlign: 'center',
          }}
          onChangeText={paypalMeHandleString => this.setState({ paypalMeHandleString })}
          value={this.state.paypalMeHandleString}
        />
        <Button
          title="Save!"
          color="#841584"
          onPress={() => this.onSave(
            this.props.navigation.navigate,
            this.state.paypalMeHandleString)}
        ></Button>
      </View>
    );
  };
}

export default PayPalMe;


      <View className="center">
        <Button
          title="Start"
          color="#841584"
          onPress={() => this.onPayPalSignUp()}
        ></Button>
      </View>