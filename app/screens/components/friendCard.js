import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

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
        <Button
          title="Send Request"
          color='#000000'
          backgroundColor='#FFFFFF'
          borderRadius={25}
          onPress={() => {}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'green',
  },
  friendView: {
    backgroundColor:'#ef553a',
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:10,
    paddingRight:10, 
    borderRadius:10,
    margin: 5,
    width: '90%',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:20,
    margin:2,
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