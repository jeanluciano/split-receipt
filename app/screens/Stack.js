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
    padding: '5%'
  },
  textContainer: {
    paddingTop: '10%',
    paddingBottom:'15%',
    alignItems: 'center'
  }
};

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      tempFriends: this.props.tempFriends
    };
<<<<<<< HEAD
    this.tempFriends = this.props.tempFriends.map(friend => {
      friend.items = []
      return friend
    })
    this.toggled = fakeReceipt.reduce((obj, val) => {
      obj[val.id] = 0
      return obj
    },{})

=======
<<<<<<< HEAD
>>>>>>> master
    this.completeCheck = this.completeCheck.bind(this)

  }

  completeHandler() {
    this.tempFriends.forEach(friend =>{
      this.props.putFriend(friend)
=======
    this.completeCheck = this.completeCheck.bind(this);
    this.completeHandler = this.completeHandler.bind(this);
    this.tempFriends = this.tempFriends.bind(this);
  }

  completeHandler() {
    this.tempFriends().forEach((friend) => {
      this.props.addTransaction(friend, this.props.user)
      this.props.putFriend(friend);
>>>>>>> 71b01175d3734292f0a636d3d122d33c820a225b
    })
    this.props.navigation.navigate('SendText');
  }

<<<<<<< HEAD
  tempFriendUpdate(toggle, friend, item){
    let friendIdx;
    this.tempFriends.forEach((tempFriend, ind)=>{
      if(tempFriend.recordID === friend.recordID) friendIdx = ind
=======
<<<<<<< HEAD
  tempFriends(){
    return this.props.friends.map(friend => {
=======
  tempFriends() {
    return this.props.friends.map((friend) => {
>>>>>>> 71b01175d3734292f0a636d3d122d33c820a225b
      friend.items = []
      return friend
>>>>>>> master
    })
    if(toggle === -1){
      this.tempFriends[friend.recordID].items.filter(cItem => cItem.id !== item)
    } else {
      this.tempFriends[friendIdx].items.push(item);
    }
  }

<<<<<<< HEAD
  completeCheck(item, toggle, friend){
    const receiptData = fakeReceipt
    const numberOfCards = receiptData.length-1
    
    this.toggled[item.id] += toggle
    this.tempFriendUpdate(toggle, friend, item)
    return (() => {
      let count = 0;
      for(let item in this.toggled){
        if(this.toggled[item] > 0) count++
=======
<<<<<<< HEAD
  completeCheck(item, toggle){
    const receiptData = this.props.receipt.receiptData
    const numberOfCards = receiptData.length-1
    let toggled = {}
    for(let i = 0; i < receiptData.length-1; i++){
=======
  completeCheck(item, toggle) {
    const receiptData = this.props.receipt.receiptData
    const numberOfCards = receiptData.length - 1
    let toggled = {}
    for (let i = 0; i < receiptData.length - 1; i++){
>>>>>>> 71b01175d3734292f0a636d3d122d33c820a225b
      toggled[receiptData[i].id] = 0
    }
    toggled[item] += toggle
    return (() => {
      let count = 0;
<<<<<<< HEAD
      for(let item in toggled){
        if(toggled[item] > 0) count++
>>>>>>> master
      }
      if(count === numberOfCards){
        this.setState({complete:true})
      } else {
        this.setState({complete:false})
      }
    })()
  }
  
=======
      for (let item in toggled){
        if (toggled[item] > 0) count++
      }
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

>>>>>>> 71b01175d3734292f0a636d3d122d33c820a225b
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

    const receiptData = fakeReceipt;
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
<<<<<<< HEAD
                      $ {item.price}
                    </Text>
                  </View>
<<<<<<< HEAD
                  <Avatars item={item} tempFriends={this.props.tempFriends} completeCheck={this.completeCheck}/>
=======
                  <Avatars item={item} tempFriends={this.tempFriends()} completeCheck={this.completeCheck}/>
=======
                      ${item.price}
                    </Text>
                  </View>
                  <Avatars item={item} tempFriends={this.tempFriends()} completeCheck={this.completeCheck} />
>>>>>>> 71b01175d3734292f0a636d3d122d33c820a225b
>>>>>>> master
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
<<<<<<< HEAD
    friends: store.friends,
    receipt: store.receipt,
    tempFriends: store.friends
  };
};
const mapDispatch = { putFriend };

export default connect(mapState, mapDispatch)(Stack);
<<<<<<< HEAD
=======
=======
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

>>>>>>> 71b01175d3734292f0a636d3d122d33c820a225b
>>>>>>> master
