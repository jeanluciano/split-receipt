import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';
import Title from './components/Initial/Title';
import Explanation1 from './components/Initial/Explanation1';
import Explanation2 from './components/Initial/Explanation2';
import Explanation3 from './components/Initial/Explanation3';
import Explanation4 from './components/Initial/Explanation4';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

var swiper = React.createClass({
  render: function () {

    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} activeDotColor="#7c96ff" showsPagination={true}>
      <Title />
      <Explanation1 />
      <Explanation2 />
      <Explanation3 />
      <Explanation4 />
      </Swiper>
    )
  }
})

export default swiper;
