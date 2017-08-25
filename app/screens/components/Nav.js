import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const Nav = ({ navigation }) => {

  return (
    <View>
    <Icon
      name="navicon"
      type="evilicon"
      color="#161338"
      style={styles.navicon}
      onPress={() => navigation.navigate('DrawerOpen')}
    />
    </View>
  );
};

Nav.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

const styles = StyleSheet.create({

  navicon: {
    marginTop: '9%',
    marginLeft: '7%',
    marginBottom: '2%',
  },

});

export default Nav;
