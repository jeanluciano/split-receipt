import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { update } from '../../redux/auth'

class PayPalMe extends Component {
  constructor() {
    super();
    this.state = {
      paypalMeHandleString: '',
    };
  }

  componentDidMount() {
    const params = this.props.navigation.state.params;
    if (params && params.signUp) {
      this.props.navigation.navigate('PayPalWebView');
    }
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
          onPress={() => {
            const payPalMe = this.state.paypalMeHandleString;
            return this.props.update(
              this.props.user.id,
              {payPalMe},
              this.props.navigation.navigate
              );
          }}
        />
      </View>
    );
  }
}

const mapState = (state) => ({
  user: state.user
})

const mapDispatch = { update };


export default connect(mapState, mapDispatch)(PayPalMe);
