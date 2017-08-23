import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import CameraLink from './components/Landing/CameraLink';
import TransactionLinks from './components/Landing/TransactionLinks';
import PendingTransactions from './components/Landing/PendingTransactions';
import { getTransactionsOnToUser } from '../redux/transactions';

class Landing extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadTransactionsOnToUser(this.props.user)
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

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadTransactionsOnToUser(user) {
      dispatch(getTransactionsOnToUser(user));
    },
  };
};

export default connect(mapState, mapDispatch)(Landing);
