import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { Avatar } from "react-native-elements";

var styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  avatar:{
    backgroundColor:"#D2335B"
  }
});

class Paginator extends Component {
  constructor() {
    super();
    this.state = {
      showDraggle: true
    };
  }


  
  render() {
    return (
      <Swiper 
      loop={false}
       height={50}
       style={styles.wrapper} 
       showsButtons={false}>
        <View style={styles.slide1}>
          <Avatar
            onLayout={this.props.setDropZoneValues}
            overlayContainerStyle={styles.avatar}
            medium
            rounded
            title="JL"
            onPress={() => console.log("works!")}
            activeOpacity={0.7}
          />
          <Avatar
            onLayout={this.props.setDropZoneValues}
            overlayContainerStyle={styles.avatar}
            medium
            rounded
            title="BP"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <View style={styles.slide1}>
          <Avatar
          onLayout={this.props.setDropZoneValues}
          overlayContainerStyle={styles.avatar}
            medium
            rounded
            title="BP"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Avatar
          overlayContainerStyle={styles.avatar}
            medium
            rounded
            onLayout={this.props.setDropZoneValues}
            title="BP"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <View style={styles.slide1}>
          <Avatar
            overlayContainerStyle={styles.avatar}
            medium
            rounded
            onLayout={this.props.setDropZoneValues}
            title="BP"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Avatar
            overlayContainerStyle={styles.avatar}
            medium
            rounded
            onLayout={this.props.setDropZoneValues}
            title="BP"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
      </Swiper>
    );
  }
}

export default Paginator;
