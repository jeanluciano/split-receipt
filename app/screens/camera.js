import React, { Component, Dimensions } from 'react';
import { View, StyleSheet, Text  } from 'react-native';
import Camera from 'react-native-camera';


class ReceiptPicture extends Component {

  takePicture() {
   this.camera.capture()
     .then((data) =>
        axios.get(`/receipt/${data}`);
        )
     .catch(err => console.error(err));
 }

  render() {
    return (
      <Camera
        ref={cam => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
      >
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
          [CAPTURE]
        </Text>
      </Camera>
    );
  }
}

const styles = StyleSheet.create({
    preview: {
    flex: 1,
    justifyContent: 'flex-end',
   alignItems: 'center',
   height: "100%",
   width: "100%"
 },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})


export default ReceiptPicture
