import React, { Component, Dimensions } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import { updateReceiptThunkCreator } from '../redux/receipt';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
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
        <LinearGradient
          style={styles.capture}
          colors={['#29D168', '#0081D5']}
        >
        <Icon
        name='camera'
        size={70}
        color='white' />
        </LinearGradient>
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
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    borderWidth:9,
    borderColor: 'black'


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
