import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const Nav = (props) => {

  const { backgroundColor, navigation } = props;
  if (backgroundColor) styles.navicon.backgroundColor = backgroundColor;

  return (
    <LinearGradient colors={['#8f53f7', '#3d6ddf']} start={[0, 0]} end={[1, 0]} >
      <Icon
        name="navicon"
        type="evilicon"
        color="#fff"
        style={ styles.navicon }
        onPress={() => navigation.navigate('DrawerOpen')}
      />
    </LinearGradient>
  );
};

Nav.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  backgroundColor: PropTypes.string,
};

const styles = StyleSheet.create({

  navicon: {
    paddingTop: '10%',
    paddingLeft: '10%',
    // backgroundColor: '#3d4d65',
  },

});

export default Nav;
