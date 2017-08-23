import React from 'react';
import { Text, View, Button } from 'react-native';
import { masterStyle, colors } from '../values/stylesheet'

export default (Comp) => {
  return () => (
    <View>
      <Comp />
      <Button
        title="Log In"
        margin={3}
        color={colors.buttonColor}
        backgroundColor={colors.buttonBackground}
        borderRadius={10}
        onPress={() => this.props.handleLogIn(
          this.state.emailText,
          this.state.passwordText,
          this.props.navigation.navigate
        )}
      />
      <Button
        title="Sign Up"
        margin={3}
        color={colors.buttonColor}
        backgroundColor={colors.buttonBackground}
        borderRadius={10}
        onPress={() => this.props.handleSignUp(
          this.state.emailText,
          this.state.passwordText,
          this.props.navigation.navigate
        )}
      />
    </View>
  )
};
