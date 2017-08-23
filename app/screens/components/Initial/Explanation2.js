import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';


export default class SecondExplanation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#374355' }}>
        <View style={styles.topView}>
          <Animatable.View animation="bounceInLeft" iterationCount={Infinity} duration={2000} >
            <Icon
              name="table-column-remove"
              type="material-community"
              color="#a9b9ca"
              size={65}
              raised={true}
              style={styles.navicon}
            />
          </Animatable.View>

          <Animatable.View animation="bounceOutRight" iterationCount={Infinity} delay={100} duration={2000} >
            <Icon
              name="wallet"
              type="entypo"
              color="#FFB6E5"
              size={65}
              raised={true}
              style={styles.navicon}
            />
          </Animatable.View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.titleText}>Save time, your's and the restaurant's.</Text>
          <Text style={styles.descriptionText}>Instead of splitting the bill amongst multiple credit cards, have one person foot the bill and simply take a picture of it.  What each person pays will be more fair and your waiter will thank you.</Text>
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

