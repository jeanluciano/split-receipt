import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

export default class TabViewExample extends Component {

  constructor() {
    super();
    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'First' },
        { key: '2', title: 'Second' },
      ],
    };
    this._handleIndexChange = this._handleIndexChange.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
    this._renderScene = SceneMap({
      '1': FirstRoute,
      '2': SecondRoute,
    })
  }

  _handleIndexChange(index) {
    this.setState({ index });
  }

  _renderHeader(props) {
    return <TabBar { ...props } />;
  }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
