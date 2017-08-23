import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';


export default class FourthExplanation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#374355'}}>
        <View  style={styles.topView}>
        <Animatable.View animation="pulse" iterationCount={Infinity} duration={2000} style={styles.navicon} >
          <Icon
            name="people"
            type="simple-line-icon"
            color="#a9b9ca"
            size={96}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>
        <Animatable.View animation="flash" iterationCount={Infinity} delay={100} duration={2000} style={styles.navicon} >
          <Icon
            name="comment-alert-outline"
            type="material-community"
            color="#FFB6E5"
            size={43}
            raised={true}
            style={styles.navicon}
          />
        </Animatable.View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.titleText}>Don't worry about geting paid back.</Text>
        <Text style={styles.descriptionText}>Cutomizable reminder settings and automatic alerts allow you to ping your friends until you are paid back what you are owed.</Text>
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
