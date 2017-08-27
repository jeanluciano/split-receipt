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
    this.allStyle = styles.activeTab;
    this.inStyle = styles.inActiveTab;
    this.outStyle = styles.inActiveTab;
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(active) {
    this[active + 'Style'] = styles.activeTab;
    this[this.state.active + 'Style'] = styles.inActiveTab;
    this.setState({ active });
  }


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
          <TouchableOpacity style={this.allStyle} onPress={() => this.toggleActive('all')}><Text>Icon 1</Text></TouchableOpacity>
          <TouchableOpacity style={this.inStyle} onPress={() => this.toggleActive('in')}><Text>Icon 2</Text></TouchableOpacity>
          <TouchableOpacity style={this.outStyle} onPress={() => this.toggleActive('out')}><Text>Icon 3</Text></TouchableOpacity>
        </View>
        <View style={styles.transactionsView}>

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

  inActiveTab: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  }

});
