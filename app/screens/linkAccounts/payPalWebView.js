import React, { Component } from 'react';
import { WebView } from 'react-native';

class PayPalWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.paypal.me/grab?locale.x=en_US&country.x=US'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default PayPalWebView;