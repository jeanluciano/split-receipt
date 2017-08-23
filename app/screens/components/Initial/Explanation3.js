import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';


export default class ThirdExplanation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#374355' }}>
      <View style={styles.topView}>
      <Animatable.View animation="slideInRight" iterationCount={Infinity} duration={2000} >
        <Icon
          name="receipt"
          type="material-community"
          color="#FFB6E5"
          size={65}
          style={styles.navicon}
        />
      </Animatable.View>

      <Animatable.View animation="fadeIn" iterationCount={Infinity} duration={2000} >
        <Icon
          name="checkbox-marked-circle-outline"
          type="material-community"
          color="#a9b9ca"
          size={45}
          style={styles.navicon}
        />
      </Animatable.View>

      <Animatable.View animation="slideInLeft" iterationCount={Infinity} duration={2000} >
        <Icon
          name="money"
          type="font-awesome"
          color="#FFB6E5"
          size={65}
          style={styles.navicon}
        />
      </Animatable.View>
    </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.titleText}>Automated, pre-populated payment requests. </Text>
          <Text style={styles.descriptionText}>We pull user-specified contacts from the phone and automatically send out text messages with a link to your PayPal.Me and a pre-filled payment form with the money owed.</Text>
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
    fontSize: 16,
  },
  descriptionText: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '3%',
    textAlign: 'center',
  }

});
