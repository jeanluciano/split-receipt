import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper-animated';
import { BoxShadow } from 'react-native-shadow';
import { width, height, totalSize } from 'react-native-dimension';

const styles = {
  wrapper: {
    backgroundColor: '#009688',
    flex: 1,
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
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

class Stack extends Component {
  constructor() {
    super();
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
      style:{alignItems:'center'}
    };
    return (
      <Swiper
        style={styles.wrapper}
        paginationStyle={{ container: { backgroundColor: 'transparent' } }}
        paginationLeft={''}
        paginationRight={''}
        smoothTransition
        stack
        dragDownToBack
        dragY
      >
        <BoxShadow setting={shadowOpt}>
          <View style={styles.slide} onLayout={this.widthGetter}>
            <Text style={styles.text}>Hamburger</Text>
            <Text style={styles.text}>Price: $40</Text>
          </View>
        </BoxShadow>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.slide} onLayout={this.widthGetter}>
            <Text style={styles.text}>Hello test</Text>
          </View>
        </BoxShadow>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.slide} onLayout={this.widthGetter}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
        </BoxShadow>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.slide} onLayout={this.widthGetter}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
        </BoxShadow>
      </Swiper>
    );
  }
}

export default Stack;
