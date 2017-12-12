import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Button } from 'react-native-elements';


class Main extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Link your account!
          </Text>
        </View>
        <Button
          title="Get my PayPalMe handle"
          style={styles.button}
          backgroundColor="#03BD5B"
          borderRadius={25}
          onPress={() => this.props.navigation.navigate('PayPalMe', { signUp: true })}
        />
        <Button
          title="I have a PayPalMe handle"
          style={styles.button}
          backgroundColor="#03BD5B"
          borderRadius={25}
          onPress={() => this.props.navigation.navigate('PayPalMe', { signUp: false })}
        />

      </View>
    );
  }
}

export default Main;

const styles = {
  wrapper: {
    backgroundColor: '#3D4D65',
    flex: 1,
  },
  swiperContainer: {
    paddingLeft: width(5),
    paddingTop: height(5),
  },
  slide: {
    height: height(70),
    width: width(90),
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFEEA',
    borderRadius: 7,
    shadowColor: 'black',
  },
  button: {
    paddingBottom: height(8),
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    padding: '5%',
  },
  textContainer: {
    paddingTop: '10%',
    paddingBottom: '15%',
    alignItems: 'center',
  },
};