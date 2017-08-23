import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { width, height } from 'react-native-dimension';
import { userUpdate } from '../../redux/auth';
import { Button } from 'react-native-elements';


class PayPalMe extends Component {
  constructor() {
    super();
    this.state = {
      paypalMeHandleString: '',
    };
  }

  componentDidMount() {
    const params = this.props.navigation.state.params;
    if (params && params.signUp) {
      this.props.navigation.navigate('PayPalWebView');
    }
  }

  onSave(userId, payPalMe, navigate) {
    this.props.userUpdate(
      userId,
      { payPalMe });
    navigate('Camera');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Enter your PayPalMe handle
          </Text>
        </View>
        <TextInput
          className="paypalMeHandle"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            textAlign: 'center',
          }}
          onChangeText={paypalMeHandleString => this.setState({ paypalMeHandleString })}
          value={this.state.paypalMeHandleString}
        />
        <Button
          title="Save!"
          style={styles.button}
          backgroundColor="#03BD5B"
          borderRadius={25}
          onPress={() => {
            return this.onSave(
              this.props.user.id,
              this.state.paypalMeHandleString,
              this.props.navigation.navigate);
          }}
        />
      </View>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
})


const styles = {
  wrapper: {
    backgroundColor: '#3D4D65',
    height: height(100),
    flex: 0,
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
const mapDispatch = { userUpdate };

export default connect(mapState, mapDispatch)(PayPalMe);
