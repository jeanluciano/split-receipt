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
import { colors } from '../values/stylesheet';

class ReceiptPicture extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  componentDidMount() {
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
          containerStyle={styles.linkIcon}
          name="account-settings"
          type="material-community"
          color={colors.splitGray}
          size={25}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        />
        <View style={styles.clickIcon}>
          <Icon
          name="camera"
          size={60}
          color={colors.splitGray}
          underlayColor="transparent"
          onPress={() => this.takePicture()}
          />
        </View>
        <Icon
          containerStyle={styles.linkIcon}
          name="exchange"
          type="font-awesome"
          color={colors.splitGray}
          size={25}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        />
      </Camera>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  linkIcon: {
    marginTop: '7%',
  },
  clickIcon: {
    alignSelf: 'flex-end',
    marginBottom: '7%',
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
