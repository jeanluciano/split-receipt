import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper-animated';
import { BoxShadow } from 'react-native-shadow';
import { width, height, totalSize } from 'react-native-dimension';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatars from './components/Avatars';
import fakeReceipt from './components/fakeReceipt';
import { putFriend } from '../redux/friends';
import { addTransaction } from '../redux/transactions'

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
    super();
    this.state = {
      complete: false,
    };
    this.completeCheck = this.completeCheck.bind(this);
    this.completeHandler = this.completeHandler.bind(this);
    this.tempFriends = this.tempFriends.bind(this);
  }

  completeHandler() {
    // this.props.friends.map(friend => {
    //   console.log('COMPLETE HANDLER', friend);
    //   this.props.addTransaction(friend, this.props.user)
    // });
    this.tempFriends().forEach((friend) => {
      console.log('COMPLETE HANDLER', friend);
      this.props.addTransaction(friend, this.props.user)
      this.props.putFriend(friend);
    })
    this.props.navigation.navigate('SendText');
  }

  tempFriends() {
    return this.props.friends.map((friend) => {
      friend.items = []
      return friend
    })
  }

  completeCheck(item, toggle) {
    // asignItem = item;
    console.log('COMPLETE CHECK')
    // // const items = this.props.receipt.receiptData
    // assignedItem.assigned = true;
    // if (this.props.receipt.receiptData.every(item => (item.assigned))) {
    //   return this.setState({ complete: true });
    // }

    const receiptData = this.props.receipt.receiptData
    const numberOfCards = receiptData.length - 1
    let toggled = {}
    for (let i = 0; i < receiptData.length - 1; i++){
      toggled[receiptData[i].id] = 0
    }
    toggled[item] += toggle
    return (() => {
      let count = 0;
      for (let item in toggled){
        if (toggled[item] > 0) count++
      }
      console.log('CHECKCOMPLETE', numberOfCards, count);
      if (count === numberOfCards){
        this.setState({ complete: true })
      } else {
        this.setState({ complete: false })
      }
      // CAN'T GET THE REQUEST TO WORK WITH FUNCTION
      // WORK AROUND:
      return this.setState({ complete: true });
    })()
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

    const receiptData = this.props.receipt.receiptData;
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
          {receiptData.map((item, ind) =>
            ind !== receiptData.length - 1 &&
              <BoxShadow setting={shadowOpt} key={ind}>
                <View style={styles.slide} onLayout={this.widthGetter}>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>
                      {item.item}
                    </Text>
                    <Text style={styles.text}>
                      ${item.price}
                    </Text>
                  </View>
                  <Avatars item={item} tempFriends={this.tempFriends()} completeCheck={this.completeCheck} />
                </View>
              </BoxShadow>)
          }
        </Swiper>

        {this.state.complete
          ? <Button
            style={styles.button}
            title="Request"
            backgroundColor="#03BD5B"
            borderRadius={25}
            onPress={() => this.completeHandler()}
          />
          : <Button style={styles.button} title="Disabled Request" />}
      </View>
    );
  }
}

const mapState = (store) => {
  return {
    user: store.user,
    friends: store.friends,
    receipt: fakeReceipt,
    transaction: store.transaction,
  };
};
const mapDispatch = { putFriend, addTransaction };

export default connect(mapState, mapDispatch)(Stack);

Stack.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    recordID: PropTypes.string.isRequired,
  })),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  addTransaction: PropTypes.func.isRequired,
  putFriend: PropTypes.func.isRequired,
};

