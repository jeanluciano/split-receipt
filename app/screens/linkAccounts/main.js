import React, { Component } from 'react';
import { View, Text, Button, Linking } from 'react-native';


class Main extends Component {
  constructor() {
    super();
    this.onPayPalSignUp = this.onPayPalSignUp.bind(this);
    this.onSkip = this.onSkip.bind(this);
  }

  onPayPalSignUp(navigate) {
    navigate('paypalMeHandle');
    const url = 'https://www.paypal.me/grab?locale.x=en_US&country.x=US';
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err));
  }

  onSkip(navigate) {
    navigate('PayPalMe');
  }

  render(props) {
    return (
      <View className="center">
        <Text>Link your accounts!</Text>
        <Button
          title="PayPal"
          color="#841584"
          onPress={() => this.onPayPalSignUp(this.props.navigation.navigate)}
        ></Button>
        <Button
          title="Skip"
          color="#841584"
          onPress={() => this.onSkip(this.props.navigation.navigate)}
        ></Button>

      </View>
    );
  }
}

export default Main;
