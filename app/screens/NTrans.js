import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, Button, Image, View } from 'react-native';
import { Icon, Tabs, Tab } from 'react-native-elements';
import { TabNavigator } from "react-navigation";
import Left from './components/Left';

class RecentChatsScreen extends Component {
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
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default MainScreenNavigator;
