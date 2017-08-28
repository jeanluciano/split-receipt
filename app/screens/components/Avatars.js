import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import fakeContacts from './fakecontacts';
import { putFriend } from '../../redux/friends';
import { width, height,totalSize } from 'react-native-dimension';
import { colors } from '../../values/stylesheet';

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
    margin: totalSize(1),
    backgroundColor: colors.splitBackground1,
  },
  avatarToggled: {
    margin: totalSize(1),
    backgroundColor: colors.splitBlue,
  },
  avatarContainer: {
    alignItems: 'center',
    paddingTop: height(2),
    paddingRight: width(2),
    paddingBottom: width(2),
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
      this.props.completeCheck(this.props.item, -1, friend);
      this.setState({ [friend.recordID]: false });
    } else {
      this.props.completeCheck(this.props.item, 1, friend);
      this.setState({ [friend.recordID]: true });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.friends.map((friend, ind) =>
          (
            <View style={styles.avatarContainer} key={`${friend.givenName}+${friend.familyName}`}>
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
            </View>
          )
        )}
      </View>
    );
  }
}

const mapState = (store, ownProps) => ({
  friends: ownProps.tempFriends,
  item: ownProps.item,
  completeCheck: ownProps.completeCheck,
})

const mapDispatch = { putFriend };

export default connect(mapState, mapDispatch)(Avatars);

Stack.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      recordID: PropTypes.string.isRequired,
    })
  ),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  addTransaction: PropTypes.func.isRequired,
  putFriend: PropTypes.func.isRequired,
};

