import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper-animated';
import { BoxShadow } from 'react-native-shadow';
import { width, height, totalSize } from 'react-native-dimension';
import { Button } from 'react-native-elements';
import Avatars from './components/avatars';
import { connect } from 'react-redux';
import fakeReceipt from './components/fakeReceipt';
import { putFriend } from '../redux/friends';

class Stack extends Component {
  constructor() {
    super();
    this.state = {
      complete: true,
    };
  }

  completeHandler() {
    this.props.navigation.navigate('SendText');
  }

  render() {
    const shadowOpt = {
      width: width(90),
      height: height(70),
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
          {receiptData.map(
            (item, ind) =>
              ind !== receiptData.length - 1 &&
              <BoxShadow setting={shadowOpt} key={ind}>
                <View style={styles.slide} onLayout={this.widthGetter}>
                  <Text style={styles.text}>
                    {item.item}
                  </Text>
                  <Text style={styles.text}>
                    Price: {item.price}
                  </Text>
                  <Avatars item={item} />
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

const mapState = ({ receipt }) => ({ receipt });
const mapDispatch = { putFriend };

export default connect(mapState, mapDispatch)(Stack);


const styles = StyleSheet.create({
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
    justifyContent: 'center',
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
  },
});
