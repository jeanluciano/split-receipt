import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default FriendCard = (props) => {
  const {friend} = props;
  console.log(friend)
  return (
    <View style={styles.friendView}>
      <Text>{friend.name}</Text>
      {friend.items.map(item =>
        <View style={styles.itemView}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      )}
      <View style={styles.itemView}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>{friend.total}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Send Request"
          color="black"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
    flex: 0,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  friendView: {
    backgroundColor:'#ef553a',
    width:360,
    height: 200,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:10,
    paddingRight:20, 
    borderRadius:10,
    margin: 5,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:20,
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