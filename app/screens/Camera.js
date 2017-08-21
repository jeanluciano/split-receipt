import React, { Component, Dimensions } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { updateReceiptThunkCreator } from '../redux/receipt';
import { connect } from 'react-redux';
import Camera from 'react-native-camera';
import axios from 'axios';

const IP_ADDRESS = '172.28.116.54'

class ReceiptPicture extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture({ rotation: 270 })
      .then(async (image) => {
        console.log('something is happening');
        const response = await axios.post('http://' + IP_ADDRESS + ':8000/api/image/receipt', image)
        console.log('we are getting this here', response.data);
        this.props.dispatchUpdateReceiptThunk(response.data);
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


const mapDispatch = dispatch => {
  return {
    dispatchUpdateReceiptThunk: (receiptData) => {
      dispatch(updateReceiptThunkCreator(receiptData));
    }
  };
};

export default connect(null, mapDispatch)(ReceiptPicture);
