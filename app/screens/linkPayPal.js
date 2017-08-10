import React, { Component } from 'react';
import { View, Text, TextInput, Button, Linking } from 'react-native';
import firebase from 'firebase';
import Swiper from 'react-native-swiper'

class LinkPayPal extends Component {
  constructor() {
    super();
    this.onLogIn = this.onLogIn.bind(this);
    this.state = {
      paypalMeHandleString: '',
    };
  }

  onPayPalSignUp() {
    const url = 'https://www.paypal.me/grab?locale.x=en_US&country.x=US';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  render(props) {
    return (
      <Swiper showsButtons={true}>
        <View className="center">
          <Text>Link your accounts!</Text>
          <Button
            title="PayPal"
            color="#841584"
            onPress={() => this.onPayPalSignUp()}
          ></Button>
        </View>
        <View className="center">
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
            title="PayPal"
            color="#841584"
            onPress={() => this.onPayPalSignUp()}
          ></Button>
        </View>
      </Swiper>
    );
  };
}

export default LinkPayPal;