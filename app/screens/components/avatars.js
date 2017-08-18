import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import fakeContacts from './fakecontacts';
import { putFriend } from '../../redux/friends';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '90%',
    paddingTop: '20%',
  },
  avatar: {
    margin: 10,
    backgroundColor: '#0081D5',
  },
});

class Avatars extends Component {
  selectHandle(friend) {
    if(!friend.items){
      friend.items = []
    }
    friend.items.push(this.props.item)
    this.props.putFriend(friend);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.friends.map(friend =>
          <Avatar
            key={friend.recordID}
            containerStyle={styles.avatar}
            rounded
            medium
            onPress={()=> this.selectHandle(friend)}
            title={`${friend.givenName[0]}${friend.familyName[0]}`}
          />,
        )}
      </View>
    );
  }
}

const mapState = (store, ownProps) => {
  return {
    friends: store.friends,
    item: ownProps.item,
  }
}
const mapDispatch = { putFriend };

export default connect(mapState, mapDispatch)(Avatars);
