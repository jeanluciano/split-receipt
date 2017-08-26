import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { login, signup } from '../redux/auth';
import { masterStyle, colors } from '../values/stylesheet';
import Splash from './components/Entry/Splash';
import { height } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';
import InnerLogin from './components/Entry/Login';

class Entry extends Component {
  constructor() {
    super();
    this.state = {
      emailText: '',
      passwordText: '',
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  render() {
    const { navigation, user } = this.props;
    if (user.payPalMe) navigation.navigate('Camera');
    else if (user.id) navigation.navigate('LinkAccounts');

    return (
      <LinearGradient colors={colors.splitGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1}}>
        <Splash style={{ height: height(80) }} />

        <View style={{ height: height(20) }}>
          <Button
            title="Sign Up"
            color={colors.splitBackground2}
            backgroundColor={colors.splitGold}
            style={styles.signupButton}
            borderRadius={10}
            onPress={() => navigation.navigate('Signup')}
          />
          <Button
            title="Log In"
            color={colors.splitWhite}
            backgroundColor="transparent"
            borderRadius={10}
            style={styles.loginButton}
            onPress={() => this.refs.modal1.open()}
          />

          <Modal
          zIndex= {3}
          style={[styles.modal, styles.modal1]}
          ref={"modal1"}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}>
            <InnerLogin />
        </Modal>

        </View>



      </LinearGradient>
    );
  };
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleLogIn(email, password, navigate) {
      dispatch(login(email, password, navigate));
    },
    handleSignUp(email, password, navigate) {
      dispatch(signup(email, password, navigate));
    },
  };
};

export default connect(mapState, mapDispatch)(Entry);

var styles = StyleSheet.create({


  loginButton: {
    marginLeft: '10%',
    marginRight: '10%',
  },

  signupButton: {
    marginLeft: '10%',
    marginRight: '10%',
  },
});
