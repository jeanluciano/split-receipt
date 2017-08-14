import React from 'react';
import { View, Text, Button } from 'react-native';

export default Main = (props) => {
  const { navigate } = props.navigation;
  return (
    <View className="center">
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
    </View>
  );
};
