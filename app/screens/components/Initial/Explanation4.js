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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Animatable.View animation="pulse" iterationCount={7} duration={2000} >
          <Icon
            name="people"
            type="simple-line-icon"
            color="#FFB6E5"
            size={106}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>
        <Animatable.View animation="flash" iterationCount={7} delay={100} duration={2000} >
          <Icon
            name="comment-alert-outline"
            type="material-community"
            color="#FFB6E5"
            size={43}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>
      </View>
    );
  }
};


const styles = StyleSheet.create({


});
