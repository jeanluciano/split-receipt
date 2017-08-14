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
  componentDidMount() {
    const params = this.props.navigation.state.params;
    if (params && params.signUp) {
      this.props.navigation.navigate('PayPalWebView');
    }
  }
  onSave(navigate, payPalMe) {
    // update firebase
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref()
      .child('users')
      .child(userId)
      .set({ payPalMe });
    navigate('LinkAccounts');
  }

  render() {
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
        />
      </View>
    );
  }
}

export default PayPalMe;
