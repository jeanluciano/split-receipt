import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { colors } from '../values/stylesheet';
import fakeTransactions from './fakeTransactions';


let tabs = {
  allStyle: {
    flex: 1,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    borderColor: colors.splitGold,
    borderWidth: 1,
  },
  inStyle: {
    flex: 1,
    borderColor: colors.splitGold,
    borderWidth: 1,
  },
  outStyle: {
    flex: 1,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    borderColor: colors.splitGold,
    borderWidth: 1,
  },
}

class Transactions extends Component {
  constructor() {
    super();
    this.state = {
      active: 'all',
    };
    this.allColor = colors.splitBackground1;
    this.allBack = colors.splitGold;
    this.inColor = colors.splitGold;
    this.inBack = colors.splitBackground1;
    this.outColor = colors.splitGold;
    this.outBack = colors.splitBackground1;
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(active) {
    console.log('active', active);
    console.log('tabs active style', tabs[active + 'Style'])
    this[active + 'Back'] = colors.splitGold;
    this[this.state.active + 'Back'] = colors.splitBackground1;
    this[active + 'Color'] = colors.splitBackground1;
    this[this.state.active + 'Color'] = colors.splitGold;
    this.setState({ active });
  }


  render() {
    return (
      <ScrollView contentContainerStyle={styles.outerView}>
        <View style={styles.slideUpView}>
          <Icon
            name="chevron-down"
            type="font-awesome"
            color={colors.splitGold}
            size={12}
          />
          <Text style={{ fontFamily: 'AvenirNext-Regular', color: colors.splitGray }}> Slide down for camera view </Text>
          <Icon
            name="chevron-down"
            type="font-awesome"
            color={colors.splitGold}
            size={12}
          />
        </View>
        <View style={styles.tabsView}>
          <View style={{ ...tabs.allStyle, backgroundColor: this.allBack }}>
            <TouchableOpacity onPress={() => this.toggleActive('all')}>
              <Icon
                name="wallet"
                type="entypo"
                color={this.allColor}
                size={12}
              />
            </TouchableOpacity>
          </View>
          <View style={{ ...tabs.inStyle, backgroundColor: this.inBack }}>
            <TouchableOpacity onPress={() => this.toggleActive('in')}>
              <Icon
                name="login"
                type="entypo"
                color={this.inColor}
                size={12}
              />
            </TouchableOpacity>
          </View>
          <View style={{ ...tabs.outStyle, backgroundColor: this.outBack }} >
            <TouchableOpacity onPress={() => this.toggleActive('out')}>
              <Icon
                name="log-out"
                type="entypo"
                color={this.outColor}
                size={12}
              />
            </TouchableOpacity>
          </View>
        </View>
        <List>
          {
            fakeTransactions.map((transaction, index) => (
              <ListItem
                key={index}
                title={`${transaction.to.givenName} ${transaction.to.familyName}`}
                subtitle={transaction.purpose}
                rightTitle={`$${transaction.total}`}
              ></ListItem>
            ))
          }
        </List>
      </ScrollView>


    );
  }

}

export default connect(null, null)(Transactions);

const styles = StyleSheet.create({

  outerView: {
    flex: 1,
    backgroundColor: colors.splitBackground1,
  },

  slideUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  tabsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '5%',
    marginRight: '5%',
  },


});
