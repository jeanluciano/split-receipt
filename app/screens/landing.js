import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

class Landing extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.outerView} >
        <View style={styles.innerView}>
          <Text style={styles.welcomeText}>Hey Raj, do you have a receipt you want to take care of?</Text>
        </View>
        <View style={styles.innerView}>
          <View style={styles.icon}>
            <Icon
              name='linked-camera'
              color='#161338'
              size={60}
            />
          </View>
        </View>
      </View>
    );

  }
}

// const mapState = state => {
//   return {};
// };

// const mapDispatch = dispatch => {
//   return {};
// };

const styles = StyleSheet.create({

  gradientView: {
  },

  outerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  innerView: {
    flex: 1,
  },

  welcomeText: {
    fontSize: 15,
    alignSelf: 'flex-end',
    paddingLeft: '30%',
    paddingBottom: '6%',
    fontFamily: 'Georgia-Bold',
    color: '#161338',
    textAlign: 'right',
  },

  icon: {
    flex: 1,
    paddingLeft: '20%',
    paddingRight: '30%',
    alignSelf: 'flex-start',
  },
});

export default Landing;
// export default connect(mapState, mapDispatch)(Landing);
