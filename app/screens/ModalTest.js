import React from 'react';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import InnerLogin from './components/Entry/Login';
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

var screen = Dimensions.get('window');

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
    var BContent = <Button onPress={() => this.setState({ isOpen: false })} style={[styles.btn, styles.btnModal]}>X</Button>;

    return (
      <LinearGradient colors={colors.splitGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1}}>
      <Splash style={{ height: height(80) }} />
        <Button onPress={() => this.refs.modal1.open()} style={styles.btn}>Basic modal</Button>
        <Modal
          style={[styles.modal, styles.modal1]}
          ref={"modal1"}
          swipeToClose={this.state.swipeToClose}
          backdropColor={colors.splitBackground2}
          backdrop={false}
          coverScreen={true}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}>
          <LinearGradient colors={colors.splitGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1}}>
          <InnerLogin />
          </LinearGradient>
        </Modal>
      </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});
