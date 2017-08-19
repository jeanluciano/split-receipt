import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import CameraLink from './components/Landing/CameraLink';

class Landing extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <CameraLink />
      </View>
    );
  }
}


export default Landing;
