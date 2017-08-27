import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { colors } from '../values/stylesheet';

class Transactions extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.outerView}>
      <View style={styles.slideUpView}>
        <Icon
          name="chevron-down"
          type="font-awesome"
          color={colors.splitGray}
          size={12}
        />
        <Text> Slide down for camera view </Text>
        <Icon
          name="chevron-down"
          type="font-awesome"
          color={colors.splitGray}
          size={12}
        />
        </View>
      </View>


    );
  }

}

export default connect(null, null)(Transactions);

const styles = StyleSheet.create({

  outerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  slideUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },


});
