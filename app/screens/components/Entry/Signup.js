import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, FormLabel, FormInput, Divider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Dash from 'react-native-dash';

import { signup } from '../../../redux/auth';
import { colors } from '../../../values/stylesheet';


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

  descriptionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // flexDirection: 'row',

  },

  passwordView: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // flexDirection: 'row',
  },

  inputView: {
    flex: 2,
  },

  buttonView: {
    justifyContent: 'flex-start',
    flex: 3,
    marginTop: '5%',
  },

  contentView: {
    flex: 1,
    marginLeft: '9%',
    marginRight: '9%',
  },

  labelStyle: {
    color: colors.splitGray,
    fontSize: 15,
  },

  inputStyle: {
    color: colors.splitWhite,
    fontSize: 14,
  },

  dashStyle: {
    marginLeft: '5%',
    marginRight: '5%',
  },

  dividerStyle: {
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: colors.splitGray,
  },
});

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      emailText: '',
      passwordText: '',
      givenNameText: '',
      familyNameText: '',
    }
  }

  render() {
    const user = this.props.user;
    if (user.payPalMe) this.props.navigation.navigate('Camera');
    else if (user.id) this.props.navigation.navigate('LinkAccounts');

    return (
      <View style={styles.gradientView}>
        <View>
          <Text style={styles.logoText}>Split.</Text>
          <View style={styles.descriptionView}>
            <Text style={styles.builtWithText}>built with </Text>
            <Icon
              name="receipt"
              type="material-community"
              color={colors.splitGold}
            />
            <Text style={styles.builtWithText}> by JRJ</Text>
          </View>
        </View>

        <View style={styles.contentView}>

          <View style={styles.emailView}>
            <View style={{ flex: 1 }}>
              <FormLabel
                fontFamily="AvenirNext-Regular"
                labelStyle={styles.labelStyle}
              >
              First Name
              </FormLabel>
            </View>

            <View style={styles.inputView}>
              <FormInput
                fontFamily="Courier"
                inputStyle={styles.inputStyle}
                selectionColor={colors.splitBlue}
                placeholder="John"
                placeholderTextColor={colors.splitBackground2}
                onChangeText={givenNameText => this.setState({ givenNameText })}
                value={this.state.givenNameText}
              />
            </View>
          </View>

          <View style={styles.emailView}>
            <View style={{ flex: 1 }}>
              <FormLabel
                fontFamily="AvenirNext-Regular"
                labelStyle={styles.labelStyle}
              >
              Last Name
              </FormLabel>
            </View>

            <View style={styles.inputView}>
              <FormInput
                fontFamily="Courier"
                inputStyle={styles.inputStyle}
                selectionColor={colors.splitBlue}
                placeholder="Doe"
                placeholderTextColor={colors.splitBackground2}
                onChangeText={familyNameText => this.setState({ familyNameText })}
                value={this.state.familyNameText}
              />
            </View>
          </View>

          <View style={styles.emailView}>
            <View style={{ flex: 1 }}>
              <FormLabel
                fontFamily="AvenirNext-Regular"
                labelStyle={styles.labelStyle}
              >
                E-mail
              </FormLabel>
            </View>

            <View style={styles.inputView}>
              <FormInput
                fontFamily="Courier"
                inputStyle={styles.inputStyle}
                selectionColor={colors.splitBlue}
                placeholder="jrj@split.com"
                placeholderTextColor={colors.splitBackground2}
                onChangeText={emailText => this.setState({ emailText })}
                value={this.state.emailText}
              />
            </View>
          </View>

          <View style={styles.passwordView}>
            <View style={{ flex: 1 }}>
              <FormLabel
                fontFamily="AvenirNext-Regular"
                labelStyle={styles.labelStyle}
              >
                Password
              </FormLabel>
            </View>
            <View style={styles.inputView}>
              <FormInput
                fontFamily="Courier"
                inputStyle={styles.inputStyle}
                secureTextEntry={true}
                placeholder="splittttttt"
                placeholderTextColor={colors.splitBackground2}
                selectionColor={colors.splitBlue}
                onChangeText={passwordText => this.setState({ passwordText })}
                value={this.state.passwordText}
              />
            </View>
          </View>

          <View style={styles.buttonView}>
            <Button
              title="Sign Up"
              margin={3}
              color={colors.buttonColor}
              backgroundColor={colors.buttonBackground}
              borderRadius={10}
              onPress={() => {
                (this.state.form === 'SIGNUP')
                  ? this.props.handleSignUp(
                    this.state.emailText,
                    this.state.passwordText,
                    this.state.givenNameText,
                    this.state.familyNameText)
                  : this.setState({ form: 'SIGNUP' })
              }}
            />
          </View>

        </View>


      </View>
    );
  }
}

const mapState = state =>
  ({
    user: state.user,
  })

const mapDispatch = dispatch/* , ownProps */ => 
  ({
    handleSignUp(email, password, givenName, familyName) {
      dispatch(signup(email, password, givenName, familyName));
    },
  });

export default connect(mapState, mapDispatch)(Signup);
