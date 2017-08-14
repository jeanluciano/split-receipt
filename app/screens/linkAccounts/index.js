import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class Main extends Component {
  constructor() {
    super();
    this.onPayPalSignUp = this.onPayPalSignUp.bind(this);
    this.onSkip = this.onSkip.bind(this);
  }

  onPayPalSignUp(navigate) {
    navigate('PayPalMe', { signUp: true });
  }

  onSkip(navigate) {
    navigate('PayPalMe');
  }

  render() {
    return (
      <View className="center">
        <Text>Link your accounts!</Text>
        <Button
          title="PayPal"
          color="#841584"
          onPress={() => this.onPayPalSignUp(this.props.navigation.navigate)}
        />
        <Button
          title="Skip"
          color="#841584"
          onPress={() => this.onSkip(this.props.navigation.navigate)}
        />

      </View>
    );
  }
}

export default Main;
