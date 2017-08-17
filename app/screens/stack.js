import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper-animated';
import { BoxShadow } from 'react-native-shadow';
import { width, height, totalSize } from 'react-native-dimension';
import { Button } from 'react-native-elements';
import Avatars from './components/avatars';

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
};

class Stack extends Component {
  constructor() {
    super();
    this.state = {
      complete: true,
    };
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
          <BoxShadow setting={shadowOpt}>
            <View style={styles.slide} onLayout={this.widthGetter}>
              <Text style={styles.text}>Hamburger</Text>
              <Text style={styles.text}>Price: $40</Text>
              <Avatars />
            </View>
          </BoxShadow>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.slide} onLayout={this.widthGetter}>
              <Text style={styles.text}>Hamburger</Text>
              <Text style={styles.text}>Price: $40</Text>
              <Avatars />
            </View>
          </BoxShadow>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.slide} onLayout={this.widthGetter}>
              <Text style={styles.text}>Hamburger</Text>
              <Text style={styles.text}>Price: $40</Text>
              <Avatars />
            </View>
          </BoxShadow>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.slide} onLayout={this.widthGetter}>
              <Text style={styles.text}>Hamburger</Text>
              <Text style={styles.text}>Price: $40</Text>
              <Avatars />
            </View>
          </BoxShadow>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.slide} onLayout={this.widthGetter}>
              <Text style={styles.text}>Hamburger</Text>
              <Text style={styles.text}>Price: $40</Text>
              <Avatars />
            </View>
          </BoxShadow>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.slide} onLayout={this.widthGetter}>
              <Text style={styles.text}>Hamburger</Text>
              <Text style={styles.text}>Price: $40</Text>
              <Avatars />
            </View>
          </BoxShadow>
        </Swiper>
        {this.state.complete ?
          <Button
            style={styles.button}
            title="Request"
            backgroundColor="#03BD5B"
            borderRadius={25}
          /> :
          <Button
            style={styles.button}
            title="Request"
          />
        }
        
      </View>
    );
  }
}

export default Stack;
