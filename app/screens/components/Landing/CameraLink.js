import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default ({ navigation }) => (
  <View style={styles.outerView} >
    <View style={styles.innerView}>
      <Text style={styles.welcomeText}>Hey Raj, do you have a receipt you want to take care of?</Text>
    </View>
    <View style={styles.innerView}>
      <View style={styles.icon}>
        <Icon
          name="linked-camera"
          color="#161338"
          size={60}
          onPress={() => navigation.navigate('Camera')}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
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
