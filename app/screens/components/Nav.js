import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const Nav = ({ navigation }) => {

  return (
    <Icon
      name="navicon"
      type="evilicon"
      color="#161338"
      style={styles.navicon}
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  );
};

Nav.propTypes = {
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

export default Nav;
