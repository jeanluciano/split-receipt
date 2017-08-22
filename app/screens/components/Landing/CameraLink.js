import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

export default ({ navigation }) => (
  <View style={styles.outerView} >
    <View style={styles.innerView}>
      <Text style={styles.welcomeText}>Hey Raj,</Text>
      <Text style={styles.welcome2Text}>do you have a receipt to split?</Text>
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
    fontSize: 20,
    alignSelf: 'flex-end',
    paddingLeft: '36%',
    fontFamily: 'Georgia-Bold',
    color: '#161338',
    textAlign: 'right',
  },
  welcome2Text: {
    fontSize: 15,
    alignSelf: 'flex-end',
    paddingLeft: '36%',
    fontFamily: 'Georgia-Bold',
    color: '#161338',
    textAlign: 'right',
    paddingBottom: '6%',
  },
  icon: {
    flex: 1,
    paddingLeft: '20%',
    paddingRight: '30%',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
});
