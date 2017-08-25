import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import styles from './style';
import { colors } from '../../../values/stylesheet';


export default class FirstExplanation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.topView}>
        <View style={styles.animationsView}>
          <Animatable.View animation="shake" iterationCount={Infinity} duration={2000} >
            <Icon
              name="shredder"
              type="material-community"
              color={colors.splitGray}
              size={65}
              raised={true}
              style={styles.default}
            />
          </Animatable.View>
          <Animatable.View animation="swing" iterationCount={Infinity} duration={2000} >
            <Icon
              name="air"
              type="entypo"
              color={colors.splitGold}
              size={65}
              raised={true}
              style={styles.default}
            />
          </Animatable.View>
        </View>
        <View style={styles.textView}>
          <Text style={styles.titleText}>Split the check, simple as that.</Text>
          <Text style={styles.descriptionText}>Using OCR, we can extract the relevant information from any receipt and calculate the appropriate amount each person should pay based on his or her order.</Text>
        </View>
      </View>
    );
  }
};

