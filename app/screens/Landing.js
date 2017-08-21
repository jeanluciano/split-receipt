import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import CameraLink from './components/Landing/CameraLink';

class Landing extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <CameraLink navigation={this.props.navigation} />
        <View style={{backgroundColor: 'white'}}>
          <Text>Pending Transactions</Text>
        </View>
      </View>
    );
  }
}


export default connect(null, null)(Landing);
