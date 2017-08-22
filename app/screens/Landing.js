import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import CameraLink from './components/Landing/CameraLink';
import TransactionLinks from './components/Landing/TransactionLinks';
import PendingTransactions from './components/Landing/PendingTransactions';

class Landing extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
      <CameraLink navigation={this.props.navigation} />
      <TransactionLinks />
        <PendingTransactions navigation={this.props.navigation} />
      </View>
    );
  }
}


export default connect(null, null)(Landing);
