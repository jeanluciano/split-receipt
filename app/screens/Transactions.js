import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, Button, Image, View } from 'react-native';
import { Icon, Tabs, Tab } from 'react-native-elements';
import { TabNavigator } from "react-navigation";
import Left from './components/Left';


const allIcon = <Icon name="wallet" type="entypo" color="#fff"/>
const completedIcon = <Icon name="md-done-all" type="ionicon" color="#fff"/>
const pendingIcon = <Icon name="assignment-late" color="#fff"/>
// const = <Icon name="md-done-all" type="ionicon" color="#fff"/>

class RecentChatsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: allIcon,
  }

  render() {
    console.log('this.props', this.props.navigation);
    return (
      <View>
        <Left navigation={this.props.navigation}/>
        <Text>List of recent chats</Text>
      </View>
    );
  }
}

class AllContactsScreen extends Component {
  render() {
    console.log('this.props', this.props.navigation);
    return (
      <View>
        <Left navigation={this.props.navigation} />
        <Text>List of recent chats</Text>
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Thing: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
}, { tabBarPosition: 'bottom' });

export default MainScreenNavigator;

const styles = StyleSheet.create({
  tyles: {

  },
  tyles: {

  },
  style: {

  },
  tyles: {

  },
});
