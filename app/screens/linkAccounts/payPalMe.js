import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

class PayPalMe extends Component {
  constructor() {
    super();
    this.state = {
      paypalMeHandleString: '',
    };
    this.onSave = this.onSave.bind(this);
  }

  onSave(navigate) {
    // update firebase
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
          onPress={() => this.onSave(this.props.navigation.navigate)}
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