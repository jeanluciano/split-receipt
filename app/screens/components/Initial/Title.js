import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


export default class FirstExplanation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#374355', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={styles.titleText}>Split.</Text>
        <Text style={styles.descriptionText}>Swipe to learn more.</Text>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({

  topView: {
    flex: 1,
    alignItems: 'flex-end',
    paddingBottom: '7%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleText: {
    color: '#fff',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 60,
  },
  descriptionText: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '3%',
    textAlign: 'center',
    color: '#a9b9ca',
  }

});
