import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default LogIn = function (props) {
  const { handleSubmit, error } = props;
  return (
    <View className='center'>
      <Text>YOU HAVE ARRIVED AT THE LOGIN SCREEN!</Text>
      <TextInput></TextInput>
    </View>
  );
};
