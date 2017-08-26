import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../../redux/auth';

import { colors } from '../../../values/stylesheet';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, FormLabel, FormInput } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Dash from 'react-native-dash';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailText: '',
      passwordText: '',
    }
  }

  render() {

    const user = this.props.user;
    if (user.payPalMe) this.props.navigation.navigate('Camera');
    else if (user.id) this.props.navigation.navigate('LinkAccounts');

    return (
      <LinearGradient colors={colors.splitGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradientView}>
        <View>
          <Text style={styles.logoText}>Split.</Text>
          <Text style={styles.builtWithText}>built with<View style={{ height: 12, width: 30 }}><Icon
            name="receipt"
            type="material-community"
            color={colors.splitGold}
          /></View>by JRJ</Text>
        </View>

        <View style={styles.contentView}>

          <Dash style={styles.dashStyle} dashColor={colors.splitGray} />

          <View style={styles.emailView}>
            <View style={{ flex: 1 }}>
              <FormLabel
                fontFamily="Courier"
                labelStyle={styles.labelStyle}
              >
                E-MAIL
            </FormLabel>
            </View>
            <View style={styles.inputView}>
              <FormInput
                placeholder='jrj@split.com'
                fontFamily="Courier"
                placeholderTextColor={colors.splitBackground1}
                inputStyle={styles.inputStyle}
                selectionColor={colors.splitBlue}
                onChangeText={emailText => this.setState({ emailText })}
                value={this.state.emailText}
              />
            </View>
          </View>

          <View style={styles.passwordView}>
            <View style={{ flex: 1 }}>
              <FormLabel
                fontFamily="Courier"
                labelStyle={styles.labelStyle}
              >
                PASSWORD
            </FormLabel>
            </View>
            <View style={styles.inputView}>
              <FormInput
                placeholder='splittttt'
                fontFamily="Courier"
                placeholderTextColor={colors.splitBackground1}
                inputStyle={styles.inputStyle}
                secureTextEntry={true}
                selectionColor={colors.splitBlue}
                onChangeText={passwordText => this.setState({ passwordText })}
                value={this.state.passwordText}
              />
            </View>
          </View>

          <Dash style={styles.dashStyle} dashColor={colors.splitGray} />

          <View style={styles.buttonView}>
            <Button
              title="Log In"
              fontFamily="AvenirNext-Regular"
              iconRight
              icon={{ name: 'keyboard-arrow-right', color: colors.splitBackground1 }}
              color={colors.splitBackground1}
              backgroundColor={colors.splitGold}
              borderRadius={10}
              onPress={() => this.props.handleLogin(this.state.emailText, this.state.passwordText)}

            />
          </View>

        </View>


      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({

  gradientView: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  logoText: {
    color: colors.splitWhite,
    textAlign: 'center',
    fontSize: 34,
    marginTop: '15%',
    marginBottom: '2%',
    alignItems: 'center',
    fontFamily: 'AvenirNext-Bold',
  },

  builtWithText: {
    color: colors.splitGray,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: '4%',
    fontFamily: 'Courier',
  },

  emailView: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',

  },

  passwordView: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  inputView: {
    flex: 2,
  },


  buttonView: {
    justifyContent: 'flex-start',
    flex: 3,
    marginTop: '10%',
  },

  contentView: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
  },

  labelStyle: {
    color: colors.splitGray,
    fontSize: 15,
  },

  inputStyle: {
    color: colors.splitGray,
    fontSize: 14,
  },

  dashStyle: {
    marginLeft: '5%',
    marginRight: '5%',
  },


});


const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleLogin(email, password) {
      dispatch(login(email, password));
    },
  };
};

export default connect(mapState, mapDispatch)(Login);
