import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements';
import FriendCard from './components/friendCard';
import { sendText } from '../redux/sendText';

const SendText = (props) => {
  const { friends } = props
  // remove hardcode
  const user = { payPalMe: 'jasonhu0' };
  return (
    <View style={styles.screen}>
      <Text>Review the your splits</Text>

      <ScrollView>
        <View style={styles.table}>
          {friends.map(friend => (<FriendCard friend={friend} key={friend.recordID} />))}
        </View>
      </ScrollView>

      <View style={styles.button}>
        <Button
          title="Send Request"
          backgroundColor="#000000"
          color="#FFFFFF"
          borderRadius={25}
          onPress={() => props.handleSendText(friends, user.payPalMe)}
        />
      </View>

    </View>
  );
}

const mapState = state => ({
  friends: [
    {
      name: 'Jason Hu',
      items: [
        {
          id: 1,
          name: 'Chicken and Veg',
          price: 10.99,
        },
        {
          id: 2,
          name: 'Chicken Lo Mein',
          price: 8.99,
        },
        {
          id: 3,
          name: 'Samuel Adams',
          price: 4.99,
        },
        {
          id: 4,
          name: 'T-Bone',
          price: 20.99,
        },
      ],
      total: 54.23,
      phone: '4126097288',
      recordID: '12l3kjasdf',
    },
    {
      name: 'Raj Kadiyala',
      items: [
        {
          id: 1,
          name: 'Mango Chicken',
          price: 11.99,
        },
        {
          id: 2,
          name: 'Ice Cream Sandwich',
          price: 8.99,
        },
        {
          id: 3,
          name: 'Samuel Adams',
          price: 4.99,
        },
        {
          id: 4,
          name: 'T-Bone',
          price: 20.99,
        },
      ],
      total: 54.23,
      phone: '2487220241',
      recordID: 'falsdkjfa',
    },
    {
      name: 'Jake Kadiyala',
      items: [
        {
          id: 1,
          name: 'Cheese Burgers',
          price: 11.99,
        },
        {
          id: 2,
          name: 'Ice Cream Sandwich',
          price: 8.99,
        },
        {
          id: 3,
          name: 'Samuel Adams',
          price: 4.99,
        },
      ],
      total: 27.23,
      phone: '8478908459',
      recordID: 'asdlfkja1',
    },
    {
      name: 'Jean Luciano',
      items: [
        {
          id: 1,
          name: 'Mango Chicken',
          price: 11.99,
        },
        {
          id: 2,
          name: 'Ice Cream Sandwich',
          price: 8.99,
        },
        {
          id: 3,
          name: 'Samuel Adams',
          price: 4.99,
        },
        {
          id: 4,
          name: 'T-Bone',
          price: 20.99,
        },
      ],
      total: 54.23,
      phone: '7085138192',
      recordID: 'asdlfkj19',
    },
  ],
})

const mapDispatch = dispatch => ({
  handleSendText(friend, payPalMe) {
    dispatch(sendText(friend, payPalMe))
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
  friends: PropTypes.arrayOf(PropTypes.shape({
    recordID: PropTypes.string.isRequired,
  })),
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
