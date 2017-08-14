import React from 'react';
import { WebView } from 'react-native';

const PayPalWebView = () =>
  (<WebView
    source={{ uri: 'https://www.paypal.me' }}
    style={{ marginTop: 20 }}
  />
  );


export default PayPalWebView;
