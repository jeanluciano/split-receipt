import React from 'react';
import { View, Text } from 'react-native';
import Nav from '../screens/components/nav';

export default (Comp) => {
  return (props) => {
    return (
      <View>
        <Nav navigation={props.navigation} />
        <Text>Welcome</Text>
        <Comp navigation={props.navigation} />
        <Text>Other text dueeeeeeeee</Text>
      </View>
    );
  };
};

