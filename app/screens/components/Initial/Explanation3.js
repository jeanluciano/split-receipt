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
        <Animatable.View animation="slideInRight" iterationCount={7} duration={2000} >
          <Icon
            name="script"
            type="material-community"
            color="#FFB6E5"
            size={65}
            style={styles.navicon}
          />
        </Animatable.View>

        <Animatable.View animation="fadeIn" iterationCount={7} duration={2000} >
          <Icon
            name="checkbox-marked-circle-outline"
            type="material-community"
            color="#FFB6E5"
            size={65}
            style={styles.navicon}
          />
        </Animatable.View>

        <Animatable.View animation="slideInLeft" iterationCount={7} duration={2000} >
          <Icon
            name="money"
            type="font-awesome"
            color="#FFB6E5"
            size={65}
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
