import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { colors } from '../values/stylesheet';

class Transactions extends Component {
  constructor() {
    super();
    this.state = {
      active: 'all',
    };
  }

  // toggleActive(){
  //   const active = this.state.active;
  //   this.refs.active.style = styles.
  //   this.state.active.
  // }


  render() {
    return (
      <ScrollView contentContainerStyle={styles.outerView}>
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
        <View style={styles.tabsView}>
          <TouchableOpacity ref="all" onPress={(props) => console.log('hello', props)}><Text>Icon 1</Text></TouchableOpacity>
          <TouchableOpacity ref="out" onPress={(props) => console.log('hello', props)}><Text>Icon 2</Text></TouchableOpacity>
          <TouchableOpacity ref="in" onPress={(props) => console.log('gello', props)}><Text>Icon 3</Text></TouchableOpacity>
        </View>
      </ScrollView>


    );
  }

}

export default connect(null, null)(Transactions);

const styles = StyleSheet.create({

  outerView: {
    flex: 1,
  },

  slideUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  tabsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: '5%',
    marginRight: '5%',
  },

  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },

});
