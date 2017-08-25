import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import { colors } from '../../../values/stylesheet';

class Login extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <View style={styles.logoView}>
          <Text style={styles.logoText}>Split.</Text>
          <Text style={styles.builtWithText}>built with <View style={{ height: 12, width: 30 }}><Icon
            name="receipt"
            type="material-community"
            color={colors.splitGold}
            style={styles.navicon}
          /></View>by JRJ</Text>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({

  logoText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },

  builtWithText: {
    color: 'gray',
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: '4%',
  },

  logoView: {
    borderWidth: 1,
    borderStyle: 'dashed',
    marginLeft: '5%',
    marginRight: '5%',
  }


});


const mapState = state => {
  return {};
};

const mapReduce = dispatch => {
  return {};
};

export default connect(null, null)(Login);
