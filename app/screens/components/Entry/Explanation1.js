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
              name="numeric"
              type="material-community"
              color={colors.splitGray}
              size={65}
              raised={true}
              style={styles.default}
            />
          </Animatable.View>
          <Animatable.View animation="swing" iterationCount={Infinity} duration={2000} >
            <Icon
              name="ban"
              type="font-awesome"
              color={colors.splitGold}
              size={65}
              raised={true}
              style={styles.default}
            />
          </Animatable.View>
        </View>
        <View style={styles.textView}>
          <Text style={styles.titleText}>No math, ever.</Text>
          <Text style={styles.descriptionText}>Using image recognition, we extract the items and prices from the receipt and take care of all calculations.</Text>
        </View>
      </View>
    );
  }
};

