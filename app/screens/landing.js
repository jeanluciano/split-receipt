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
      <LinearGradient colors={['#8f53f7', '#3d6ddf']} start={[0, 0]} end={[1, 0]}>
      <View style={styles.gradientView}>
          <Text style={styles.welcomeText}>Hey Raj, welcome!</Text>
          <Text>Do you have a receipt to take care of?</Text>
          <Icon
            name='linked-camera'
            color='#161338'
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

  gradientView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '20%',
  },

  welcomeText: {
    fontSize: 25,
    fontFamily: 'Georgia-Bold',
    color: '#161338',
  },


});

export default Landing;
// export default (mapState, mapDispatch)(Landing);
