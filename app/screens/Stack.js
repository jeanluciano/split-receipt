import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper-animated';
import { BoxShadow } from 'react-native-shadow';
import { width, height, totalSize } from 'react-native-dimension';
import { Button } from 'react-native-elements';
import Avatars from './components/Avatars';
import { connect } from 'react-redux';
import fakeReceipt from './components/fakeReceipt';
import { putFriend } from '../redux/friends';
import PropTypes from 'prop-types';
import { addTransaction } from '../redux/transactions';

const styles = {
  wrapper: {
    backgroundColor: '#3D4D65',
    flex: 1,
  },
  swiperContainer: {
    paddingLeft: width(5),
    paddingTop: height(5),
  },
  slide: {
    height: height(70),
    width: width(90),
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFEEA',
    borderRadius: 7,
    shadowColor: 'black',
  },
  button: {
    paddingBottom: height(8),
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    padding: '5%',
  },
  textContainer: {
    paddingTop: '10%',
    paddingBottom: '15%',
    alignItems: 'center',
  },
};

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      tempFriends: this.props.tempFriends,
    };
    this.tempFriends = this.props.tempFriends.map(friend => {
      friend.items = [];
      return friend;
    });
    this.toggled = this.props.receiptData.reduce((obj, val) => {
      obj[val.id] = 0;
      return obj;
    }, {});

    this.completeCheck = this.completeCheck.bind(this);
  }

  completeHandler() {
        
    this.tempFriends.forEach(friend => {
      this.props.addTransaction(friend, this.props.user);
      this.props.putFriend(friend);
    });
    this.props.navigation.navigate('SendText');
  }

  tempFriendUpdate(toggle, friend, item) {
    let friendIdx;
    this.tempFriends.forEach((tempFriend, ind) => {
      if (tempFriend.recordID === friend.recordID) friendIdx = ind;
    });
    if (toggle === -1) {
      this.tempFriends[friendIdx].items.filter(
        cItem => cItem.id !== item.id
      );
    } else {
      this.tempFriends[friendIdx].items.push(item);
    }
  }

  completeCheck(item, toggle, friend) {
    const receiptData = fakeReceipt;
    const numberOfCards = receiptData.length - 1;

    this.toggled[item.id] += toggle;
    this.tempFriendUpdate(toggle, friend, item);
    return (() => {
      let count = 0;
      for (let item in this.toggled) {
        if (this.toggled[item] > 0) count++;
      }
      if (count === numberOfCards) {
        this.setState({ complete: true });
      } else {
        this.setState({ complete: false });
      }
    })();
  }

  render() {
    const shadowOpt = {
      height: height(70),
      width: width(90),
      color: '#000',
      border: 2,
      radius: 7,
      opacity: 0.1,
      x: 0.3,
      y: 2,
    };

    // const receiptData = fakeReceipt;
    return (
      <View style={styles.wrapper}>
        <Swiper
          style={styles.swiperContainer}
          showPagination={false}
          paginationStyle={{ container: { backgroundColor: 'transparent' } }}
          paginationLeft={''}
          paginationRight={''}
          smoothTransition
          stack
          dragDownToBack
          dragY
          loop
        >
          {this.receipt.receiptData.map(
            (item, ind) =>
              ind !== receiptData.length - 1 &&
              <BoxShadow setting={shadowOpt} key={ind}>
                <View style={styles.slide} onLayout={this.widthGetter}>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>
                      {item.item}
                    </Text>
                    <Text style={styles.text}>
                      $ {item.price}
                    </Text>
                  </View>
                  <Avatars
                    item={item}
                    tempFriends={this.props.tempFriends}
                    completeCheck={this.completeCheck}
                  />
                </View>
              </BoxShadow>,
          )}
        </Swiper>

        {this.state.complete
          ? <Button
              style={styles.button}
              title="Request"
              backgroundColor="#03BD5B"
              borderRadius={25}
              onPress={this.completeHandler.bind(this)}
            />
          : <Button style={styles.button} title="Request" />}
      </View>
    );
  }
}

const mapState = store => {
  return {
    user: store.user,
    friends: store.friends,
    receipt: store.receipt,
    tempFriends: store.friends,
    transaction: store.transaction,
  };
};
const mapDispatch = { putFriend, addTransaction };

export default connect(mapState, mapDispatch)(Stack);

Stack.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      recordID: PropTypes.string.isRequired,
    }),
  ),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  addTransaction: PropTypes.func.isRequired,
  putFriend: PropTypes.func.isRequired,
};
