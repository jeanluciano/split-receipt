import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

const Nav = ({ navigation }) => (
  <Icon
    name="navicon"
    type="evilicon"
    color="#000"
    onPress={() => navigation.navigate('DrawerOpen')}
  />
);


export default Nav;
