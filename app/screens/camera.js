import React, { Component, Dimensions } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';

const IP_ADDRESS = '172.28.116.32'

class ReceiptPicture extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture({ rotation: 270 })
      .then((image) => {
        axios.post('http://' + IP_ADDRESS + ':8000/api/image/receipt', image)
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Camera
        ref={cam => {this.camera = cam;}}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        captureTarget={Camera.constants.CaptureTarget.memory}
        orientation={Camera.constants.Orientation.portrait}
      >
        <Text style={styles.capture} onPress={this.takePicture}>
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
    height: '100%',
    width: '100%',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  }
})


export default ReceiptPicture
