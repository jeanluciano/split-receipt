import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, Divider } from 'react-native-elements';

import { connect } from 'react-redux';
import { colors } from '../../../values/stylesheet';
import LinearGradient from 'react-native-linear-gradient';


class Login extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <LinearGradient colors={colors.splitGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradientView}>
        <View style={styles.logoView}>
          <Text style={styles.logoText}>Split.</Text>
          <Text style={styles.builtWithText}>built with <View style={{ height: 12, width: 30 }}><Icon
            name="receipt"
            type="material-community"
            color={colors.splitGold}
            style={styles.navicon}
          /></View>by JRJ</Text>
        </View>
        <Divider />
      </LinearGradient>
    );
  }

}


const styles = StyleSheet.create({

  gradientView: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  logoText: {
    color: colors.splitWhite,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginTop: '15%',
    marginBottom: '1%',
    alignItems: 'center',
  },

  builtWithText: {
    color: 'gray',
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: '4%',
  },

  logoView: {
    // borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.splitGold,
    marginLeft: '5%',
    marginRight: '5%',
  },

  dividerStyle: {
    borderStyle: 'dashed',
  },


});


const mapState = state => {
  return {};
};

const mapReduce = dispatch => {
  return {};
};

export default connect(null, null)(Login);
