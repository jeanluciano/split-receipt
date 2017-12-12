import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const Left = ({ navigation }) => {

  return (
    <LinearGradient colors={['#2cd664', '#0082d5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >
    <Icon
      name="arrow-left"
      type="material-community"
      color="#fff"
      style={styles.navicon}
      onPress={() => navigation.navigate('Landing')}
    />
    </LinearGradient>
  );
};

Left.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

const styles = StyleSheet.create({

  navicon: {
    paddingTop: '9%',
    paddingLeft: '7%',
    paddingBottom: '2%',
  },

});

export default Left;
