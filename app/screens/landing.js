import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

class Landing extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ paddingLeft: '10%' }}>
        <Icon
          name='navicon'
          type='evilicon'
          color='#000'

        />
        <View style={{ paddingLeft: '10%' }}>
          <Text style={styles.welcomeText}>Hey Raj, welcome!</Text>
          <Text>Do you have a receipt to take care of?</Text>
          <Icon
            name='linked-camera'
            color='#fff'
          />

        </View>
      </LinearGradient>
    );

  }
}

// const mapState = state => {
//   return {};
// };

// const mapDispatch = dispatch => {
//   return {};
// };

const styles = StyleSheet.create({

  welcomeText: {
    fontSize: 25,
  },
  topView: {
    backgroundColor: '#3d4d65',
  }


});

export default Landing;
// export default (mapState, mapDispatch)(Landing);
