import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';


export default class FirstAnimation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Animatable.View animation="bounceInLeft" iterationCount={7} duration={2000} >
          <Icon
            name="table-column-remove"
            type="material-community"
            color="#FFB6E5"
            size={65}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>

        <Animatable.View animation="bounceOutRight" iterationCount={7} delay={100} duration={2000} >
          <Icon
            name="wallet"
            type="entypo"
            color="#FFB6E5"
            size={65}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>
      </View>
    );
  }
};


const styles = StyleSheet.create({

  navicon: {
    paddingTop: '5%',
    paddingLeft: '7%',
    paddingBottom: '2%',
    shadowColor: 'red',
  },

});
