import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
    paddingTop: '15%',
  },
  avatar: {
    margin: 10,
    backgroundColor: '#0081D5',
  },
  avatarToggled: {
    margin: 10,
    backgroundColor: '#A939B9',
  },
  avatarContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

class Avatars extends Component {
  constructor(props) {
    super(props);
    this.selectHandle = this.selectHandle.bind(this);
    this.state = {
      toggled: {},
    };
  }

  toggleObj() {
    let toggleObj = {};
    this.props.friends.forEach(friend => {
      toggleObj[friend.recordID] = false;
    });
    return toggleObj;
  }

  selectHandle(friend) {
    if (this.state[friend.recordID]) {
      friend.items.filter(item => item.id !== this.props.item);
      this.props.completeCheck(this.props.item.id, -1);
      this.setState({ [friend.recordID]: false });
    } else {
      friend.items.push(this.props.item);
      this.props.completeCheck(this.props.item.id, 1);
      isSelected = true;
      this.setState({ [friend.recordID]: true });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.friends.map((friend, ind) =>
          <View style={styles.avatarContainer}>
            <Avatar
              key={ind + 1}
              containerStyle={
                this.state[friend.recordID]
                  ? styles.avatarToggled
                  : styles.avatar
              }
              rounded
              medium
              onPress={() => this.selectHandle(friend)}
              title={`${friend.givenName[0]}${friend.familyName[0]}`}
            />
            <Text>
              {friend.givenName}
            </Text>
          </View>,
        )}
      </View>
    );
  }
}

const mapState = (store, ownProps) => {
  return {
    friends: ownProps.tempFriends,
    item: ownProps.item,
    completeCheck: ownProps.completeCheck,
  };
};
const mapDispatch = { putFriend };

export default connect(mapState, mapDispatch)(Avatars);
