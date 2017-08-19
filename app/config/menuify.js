import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Nav from '../screens/components/nav';

// <LinearGradient colors={['#8f53f7', '#3d6ddf']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >

export default (Comp, colorArr) => {

  let backgroundColor = colorArr || ['#fff', '#fff']

  return (props) => {
    return (
      <LinearGradient colors={backgroundColor} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >
        <Nav navigation={props.navigation} />
        <Comp navigation={props.navigation} />
      </LinearGradient>
    );
  };
};

