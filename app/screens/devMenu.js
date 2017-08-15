import React from 'react';
import { TouchableHighlight, View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';


import Nav from './components/nav';

export default Main = (props) => {
  const { navigate } = props.navigation;
  return (
    <View className="center" style={{paddingTop: '20%'}}>
        <Icon
      name="navicon"
      type="evilicon"
      color="#000"
      onPress={() => navigate('DrawerOpen')}
    />
      <Text>Main.js works</Text>
      <Button
        title="Log In"
        color="#841584"
        onPress={() => navigate('Login')}
      />
      <Button
        title="Send Text"
        color="#841584"
        onPress={() => navigate('SendText')}
      />
      <Button
        title="Main"
        color="#841584"
        onPress={() => navigate('Main')}
      />
      <Button
        title="Login with Dummy"
        color="#841584"
        onPress={() => navigate('SendText')}
      />
      <Button
        title="Camera"
        color="#841584"
        onPress={() => navigate('Camera')}
      />
      <Button
        title="Drag and Drop"
        color="#841584"
        onPress={() => navigate('Dragndrop')}
      />
      <Button
        title="Contacts"
        color="#841584"
        onPress={() => navigate('Contacts')}
      />
    </View>
  );
};
