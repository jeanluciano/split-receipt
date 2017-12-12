import React from 'react';
import { Button, Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import InnerLogin from './components/Entry/Login';
import InnerSignup from './components/Entry/Signup';
import Splash from './components/Entry/Splash';
import { colors } from '../values/stylesheet';
import { height } from 'react-native-dimension';

import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TextInput
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class Example extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }


  render() {
    const { navigation, user } = this.props;
    return (

      <View style={{ flex: 1, backgroundColor: colors.splitBackground1 }}>
        <Splash style={{ height: height(70) }} />

        <View style={{ height: height(30) }}>
          <Button
            title="Sign Up"
            color={colors.splitBackground2}
            backgroundColor={colors.splitGold}
            style={styles.signupButton}
            borderRadius={10}
            onPress={() => this.refs.signup.open()}
          />
          <Button
            title="Log In"
            color={colors.splitWhite}
            backgroundColor="transparent"
            borderRadius={10}
            style={styles.loginButton}
            onPress={() => this.refs.login.open()}
          />
        </View>
        <Modal
          ref={"login"}
          swipeToClose={this.state.swipeToClose}
          coverScreen={true}
        >
          <View style={{ flex: 1, backgroundColor: colors.splitBackground1, }}>
            <Icon
              name="close"
              type="navigation"
              color={colors.splitGray}
              size={25}
              raised={true}
              style={styles.closeIcon}
              onPress={() => this.refs.login.close()}
            />
            <InnerLogin navigation={navigation} user={user} />
          </View>
        </Modal>

        <Modal
          ref={"signup"}
          swipeToClose={this.state.swipeToClose}
          coverScreen={true}
        >
          <View style={{ flex: 1, backgroundColor: colors.splitBackground1, }}>
            <Icon
              name="close"
              type="navigation"
              color={colors.splitGray}
              size={25}
              raised={true}
              style={styles.closeIcon}
              onPress={() => this.refs.signup.close()}
            />
            <InnerSignup navigation={navigation} user={user} />
          </View>
        </Modal>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: 'flex-end',
    paddingRight: '4%',
    paddingTop: '4%',
    backgroundColor: colors.splitBackground1,
  },
  loginButton: {
    marginLeft: '10%',
    marginRight: '10%',
  },

  signupButton: {
    marginLeft: '10%',
    marginRight: '10%',
  },
});
