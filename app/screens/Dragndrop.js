import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList,
  PanResponder,
  Image,
  Animated,
  Dimensions
} from "react-native";
import Paginator from "./components/pagination";
const { width, height } = Dimensions.get("window");

class DragNDrop extends Component {
  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      showDraggable: true,
      dropZoneValues: {
        y: 0,
        x: 0
      }
    };
    this.setDropZoneValues = this.setDropZoneValues.bind(this);
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        });
        this.state.pan.setValue({ x: 0, y: 0 });
        Animated.spring(this.state.scale, {
          toValue: 1.1,
          friction: 3
        }).start();
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        console.log(this.state.dropZoneValues);
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable: false
          });
        }
        this.state.pan.flattenOffset();
        Animated.spring(this.state.scale, { toValue: 1, friction: 3 }).start();
      }
    });
  }

  isDropZone(gesture) {
    var dz = this.state.dropZoneValues;
    console.log("dz------", dz.y, dz.x);
    console.log("gesture-----", gesture.moveY, gesture.moveX);
    return (
      gesture.moveX > dz.x &&
      gesture.moveX < dz.x + dz.width &&
      (gesture.moveY > 680 && gesture.moveY < 710)
    );
  }

  setDropZoneValues(event) {
    console.log("event-----", event.nativeEvent.layout);
    this.setState({
      dropZoneValues: event.nativeEvent.layout
    });
  }

  renderDraggable() {
    const { pan, scale } = this.state;
    const [translateX, translateY] = [pan.x, pan.y];
    let rotate = "0deg";
    const imageStyle = {
      transform: [{ translateX }, { translateY }, { rotate }, { scale }]
    };
    if (this.state.showDraggable) {
      return (
        <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
          <Image source={require("../assets/slice1.jpg")} />
        </Animated.View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderDraggable()}
        <View style={styles.paginator}>
          <Paginator setDropZoneValues={this.setDropZoneValues} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#3D4D65"
  },
  paginator: {
    position: "absolute",
    height: 40,
    left: 0,
    top: height - 120,
    width: width
  }
});

export default DragNDrop;
