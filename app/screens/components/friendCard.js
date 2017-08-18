import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendText } from '../../redux/sendText';

<<<<<<< HEAD
function totalGetter(items) {
  let total = 0;
  items.forEach(item => {
    total += item.price;
  });
  return total;
}

export default (FriendCard = props => {
  const { friend } = props;
  console.log(friend);
  return (
    <View style={styles.friendView}>
      <Text>{`${friend.givenName} ${friend.familyName}`}</Text>
      {friend.items.map(item =>
        <View style={styles.itemView}>
          <Text>
            {item.item}
          </Text>
          <Text>
            {item.price}
          </Text>
        </View>,
      )}
      <View style={styles.itemView}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>
          {totalGetter(friend.items)}
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="Send Request" color="black" onPress={() => {}} />
=======
const FriendCard = (props) => {
  const { friend } = props;
  const user = { payPalMe: 'jasonhu0' };
  return (
    <View style={styles.friendView}>
      <Text>{friend.name}</Text>

      {friend.items.map(item =>
        (<View style={styles.itemView} key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>))}

      <View style={styles.itemView}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>{friend.total}</Text>
>>>>>>> master
      </View>

      <Button
        title="Send Request"
        color="#000000"
        backgroundColor="#FFFFFF"
        borderRadius={25}
        onPress={() => {
          props.handleSendText([friend], user.payPalMe)
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'green',
  },
  friendView: {
    backgroundColor: '#ef553a',
<<<<<<< HEAD
    width: 360,
    height: 200,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 20,
=======
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
>>>>>>> master
    borderRadius: 10,
    margin: 5,
    width: '90%',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
<<<<<<< HEAD
=======
    margin: 2,
>>>>>>> master
  },
  friendName: {
    fontFamily: 'Cochin',
  },
  itemName: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});
<<<<<<< HEAD
=======

const mapState = state => ({
  user: state.user,
})

const mapDispatch = dispatch => ({
  handleSendText(friend, payPalMe) {
    dispatch(sendText(friend, payPalMe))
  },
});

export default connect(mapState, mapDispatch)(FriendCard);

/**
 * PROP TYPES
 */
FriendCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  friend: PropTypes.shape({
    recordID: PropTypes.string.isRequired,
  }),
  handleSendText: PropTypes.func.isRequired,
};
>>>>>>> master
