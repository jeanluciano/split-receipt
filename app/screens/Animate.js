import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';

export default const FirstAnimation() {
  return (
      <View>
        <Animatable.View animation="fadeInUp" iterationCount={7} duration={2000} >
          <Icon
            name="call-split"
            type="material-community"
            color="#FFB6E5"
            size={65}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>
        <Animatable.View animation="shake" iterationCount={7} duration={2000} >
          <Icon
            name="shredder"
            type="material-community"
            color="#FFB6E5"
            size={65}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>

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

        <Animatable.View animation="bounceOutRight" iterationCount={7} delay= {100} duration={2000} >
          <Icon
            name="wallet"
            type="entypo"
            color="#FFB6E5"
            size={65}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>

        <Animatable.View animation="pulse" iterationCount={7} duration={2000} >
          <Icon
            name="people"
            type="simple-line-icon"
            color="#FFB6E5"
            size={65}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>

        <Animatable.View animation="flash" iterationCount={7} delay= {100} duration={2000} >
          <Icon
            name="comment-alert-outline"
            type="material-community"
            color="#FFB6E5"
            size={65}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>

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
    )
}

const styles = StyleSheet.create({
  navicon: {
    paddingTop: '5%',
    paddingLeft: '7%',
    paddingBottom: '2%',
    shadowColor: 'red',
  },
});
