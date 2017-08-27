import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import styles from './style';
import { colors } from '../../../values/stylesheet';


export default class SecondExplanation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.topView}>
        <View style={styles.animationsView}>
          <Animatable.View animation="bounceInLeft" iterationCount={Infinity} duration={2000} >
            <Icon
              name="clock"
              type="entypo"
              color={colors.splitGray}
              size={65}
              raised={true}
              style={styles.default}
            />
          </Animatable.View>

          <Animatable.View animation="bounceOutRight" iterationCount={Infinity} delay={100} duration={2000} >
            <Icon
              name="wallet"
              type="entypo"
              color={colors.splitGold}
              size={65}
              raised={true}
              style={styles.default}
            />
          </Animatable.View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.titleText}>Save time.</Text>
          <Text style={styles.descriptionText}>Instead of splitting the bill amongst multiple credit cards, have one person foot the bill and simple take a picture of it.  We will split it up fairly and your waiter will thank you.</Text>
        </View>
      </View>
    );
  }
};


