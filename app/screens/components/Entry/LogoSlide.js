import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../../values/stylesheet';


export default () => (
  <View style={styles.logoView}>
    <Text style={styles.logoText}>Split.</Text>
    <Text style={styles.swipeText}>Swipe to learn more.</Text>
  </View>
);

const styles = StyleSheet.create({

  logoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    color: colors.splitWhite,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 60,
  },

  swipeText: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '3%',
    textAlign: 'center',
    color: colors.splitGray,
  },

});
