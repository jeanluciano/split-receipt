import axios from 'axios';
import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import secrets from '../../secrets';
import FriendCard from './components/friendCard';

const TEST_DESTINATION = process.env.TWILIO_TEST_JASON_DESTIONATION;
const TEST_AMOUNT = process.env.TWILIO_TEST_AMOUNT;

class SendText extends Component {
  constructor() {
    super();
    this.handleSMS = this.handleSMS.bind(this);
  }

  handleSMS(props) {
    const { navigate } = props.navigation
    // grab payPalMe handle
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId)
      .once('value')
      .then((snapshot) => {
        return snapshot.val().payPalMe
      })
      .then((payPalMe) =>
        // need to loop through each endpoint
        axios.post('http://localhost:8000/api/payPalMe/', {
          destinationNumber: TEST_DESTINATION,
          payPalMe,
          amount: TEST_AMOUNT,
        })
          .catch(console.err)
      )
      .catch(console.err);
    navigate('Main');
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Review the your splits</Text>

        <ScrollView>
          <View style={styles.table}>
            {/* this.props.friends.map( friend => (<FriendCard friend={friend} />)) */}
            {this.props.friends.map(friend => (<FriendCard friend={friend} />))}
          </View>
        </ScrollView>

        <View style={styles.button}>
          <Button
            title="Send Requests"
            color="#841584"
            onPress={() => this.handleSMS(this.props)}
          />
        </View>

      </View>
    );
  }
}

const mapState = (state) => {
  return {
   friends: state.friends,
  };
};

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SendText);

/**
 * PROP TYPES
 */
SendText.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  friends: PropTypes.object,
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ebeef0',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  table: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
});
