import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import LogoSlide from './LogoSlide';
import Explanation1 from './Explanation1';
import Explanation2 from './Explanation2';
import Explanation3 from './Explanation3';
import Explanation4 from './Explanation4';


export default () => (
  <Swiper
  loop={false}
  showsButtons={false}
  activeDotColor="#7c96ff"
  showsPagination={true}
  >
    <LogoSlide />
    <Explanation1 />
    <Explanation2 />
    <Explanation3 />
    <Explanation4 />
  </Swiper>
);

// var styles = StyleSheet.create({
//   wrapper: {
//   },
//   slide1: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB',
//   },
//   slide2: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#97CAE5',
//   },
//   slide3: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#92BBD9',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   }
// })

// var swiper = React.createClass({
//   render: function () {

//     return (
//       <Swiper style={styles.wrapper} showsButtons={false} loop={false} activeDotColor="#7c96ff" showsPagination={true}>
//       <Title />
//       <Explanation1 />
//       <Explanation2 />
//       <Explanation3 />
//       <Explanation4 />
//       </Swiper>
//     )
//   }
// })

// export default swiper;
