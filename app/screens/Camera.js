import React, { Component, Dimensions } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { updateReceiptThunkCreator } from '../redux/receipt';
import { getContacts } from '../redux/contacts';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Camera from 'react-native-camera';
import axios from 'axios';
import Menu from './components/Nav';

class ReceiptPicture extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  componentDidMount(){
    this.props.getContacts()
  }

  takePicture() {
    console.log('this works')
    this.camera
      .capture({ rotation: 270 })
      .then(async image => {
        console.log('something is happening');
        const response = await axios.post(
          'http://' + process.env.IP_ADDRESS + ':8000/api/image/receipt',
          image,
        );
        console.log('we are getting this here', response.data);
        this.props.dispatchUpdateReceiptThunk(response.data);
        this.props.navigation.navigate('EditTable');

      })
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
        captureTarget={Camera.constants.CaptureTarget.memory}
        orientation={Camera.constants.Orientation.portrait}
      >
        <Icon
          containerStyle={styles.menu}
          name="navicon"
          type="evilicon"
          color="#29D168"
          size={40}
          onPress={()=> this.props.navigation.navigate('DrawerOpen')}
        />
        <LinearGradient
        style={styles.capture}
        colors={['#29D168', '#0081D5']}
        >
          <Icon name="camera" size={70} color="white"
          underlayColor="transparent"
          onPress={() => this.takePicture()}/>
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
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    borderWidth: 9,
    borderColor: 'black',
  },
  menu : {
    bottom: '66%',
    alignSelf: 'flex-start',
    padding: '5%'
  }
});

const mapDispatch = dispatch => {
  return {
    dispatchUpdateReceiptThunk: receiptData => {
      dispatch(updateReceiptThunkCreator(receiptData));
    },
    getContacts: () => {
      dispatch(getContacts());
    }
  };
};

export default connect(null, mapDispatch)(ReceiptPicture);
