import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import styles from './style';
import { colors } from '../../../values/stylesheet';


export default class FourthExplanation extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.topView}>
        <View  style={styles.animationsView}>
        <Animatable.View animation="pulse" iterationCount={Infinity} duration={2000} style={styles.navicon} >
          <Icon
            name="people"
            type="simple-line-icon"
            color={colors.splitGray}
            size={65}
            raised={true}
            style={styles.default}
          />
        </Animatable.View>
        <Animatable.View animation="flash" iterationCount={Infinity} delay={100} duration={2000} style={styles.navicon} >
          <Icon
            name="comment-alert-outline"
            type="material-community"
            color={colors.splitGold}
            size={43}
            raised={true}
            style={styles.default}
          />
        </Animatable.View>
        </View>
        <View style={styles.textView}>
        <Text style={styles.titleText}>Reminders.</Text>
        <Text style={styles.descriptionText}>Cutomizable reminder settings and automatic alerts allow you to ping your friends until you are paid back what you are owed.</Text>
        </View>
      </View>

    );
  }
};
