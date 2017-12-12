import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import styles from './style';
import { colors } from '../../../values/stylesheet';


export default class ThirdExplanation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.topView}>
      <View style={styles.animationsView}>
      <Animatable.View animation="slideInRight" iterationCount={Infinity} duration={2000} >
        <Icon
          name="receipt"
          type="material-community"
          color={colors.splitGold}
          size={65}
          style={styles.default}
        />
      </Animatable.View>

      <Animatable.View animation="fadeIn" iterationCount={Infinity} duration={2000} >
        <Icon
          name="checkbox-marked-circle-outline"
          type="material-community"
          color={colors.splitGray}
          size={45}
          style={styles.default}
        />
      </Animatable.View>

      <Animatable.View animation="slideInLeft" iterationCount={Infinity} duration={2000} >
        <Icon
          name="money"
          type="font-awesome"
          color={colors.splitGold}
          size={65}
          style={styles.default}
        />
      </Animatable.View>
    </View>
        <View style={styles.textView}>
          <Text style={styles.titleText}>Automated payment requests.</Text>
          <Text style={styles.descriptionText}>We pull user-specified contacts from the phone and automatically send out text messages with a link to your Paypal handle and a populated payment request.</Text>
        </View>
      </View>
    );
  }
};
