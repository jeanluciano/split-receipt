import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendText } from '../redux/sendText';
import FriendCard from './components/FriendCard';


class SendText extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>Review the your splits</Text>

        <ScrollView>
          <View style={styles.table}>
            {this.props.friends.map(friend => (<FriendCard friend={friend} />))}
          </View>
        </ScrollView>

        <View style={styles.button}>
          <Button
            title="Send Selected"
            color="#841584"
            onPress={() => this.props.handleSendText(this.props.friends, this.user)}
          />
        </View>

      </View>
    );
  }
}

const mapState = (state) => {
  return {
    friends: state.friends,
    user: state.user,
  };
};

const mapDispatch = dispatch => ({
  handleSendText(friends, user) {
    dispatch(sendText(friends, user));
  },
});

export default connect(mapState, mapDispatch)(SendText);

/**
 * PROP TYPES
 */
SendText.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  friends: PropTypes.object,
  handleSendText: PropTypes.func.isRequired,
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
