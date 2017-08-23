import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';


export default class FirstExplanation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#374355'}}>
        <View style={styles.topView}>
          <Animatable.View animation="shake" iterationCount={Infinity} duration={2000} >
            <Icon
              name="shredder"
              type="material-community"
              color="#a9b9ca"
              size={65}
              raised={true}
              style={styles.navicon}
            />
          </Animatable.View>
          <Animatable.View animation="swing" iterationCount={Infinity} duration={2000} >
          <Icon
            name="air"
            type="entypo"
            color="#FFB6E5"
            size={65}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>
      </View>
        <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.titleText}>Split the check, simple as that.</Text>
        <Text style={styles.descriptionText}>Using OCR, we can extract the relevant information from any receipt and calculate the appropriate amount each person should pay based on his or her order.</Text>
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
    alignSelf: 'center',
    padding: 0,
    margin: 0,
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionText: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '3%',
    alignSelf: 'center',
    textAlign: 'center',
  }

});
