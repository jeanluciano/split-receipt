import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, Button, Image, View } from 'react-native';
import { Icon, Tabs, Tab } from 'react-native-elements';

export default class Transactions extends Component {

  constructor() {
    super();
    this.state = {
      selectedTab: 'profile',
    }
  }

  changeTab(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {

    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="arrow-left"
            type="material-community"
            color="#161338"
            style={styles.navicon}
            onPress={() => navigation.navigate('DrawerOpen')}
          />
          <Text style={{ color: '#000' }}>Why is this not working?</Text>
          <Text style={{ color: '#000' }}>fdkjnvajkdsvnkjavnjkasnfjvkasndvkjnsadvsaddscsadcsadcasdsvdcsdcscdscsdcsdcsdv</Text>
          <Text style={{ color: '#000' }}>fdkjnvajkdsvnkjavnjkasnfjvkasndvkjnsadvsaddscsadcsadcasdsvdcsdcscdscsdcsdcsdv</Text>
          <Text style={{ color: '#000' }}>fdkjnvajkdsvnkjavnjkasnfjvkasndvkjnsadvsaddscsadcsadcasdsvdcsdcscdscsdcsdcsdv</Text>
        </View>
        <Tabs>
          <Tab
            titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
            selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
            renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='whatshot' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
            onPress={() => this.changeTab('feed')}>
          </Tab>
          <Tab
            titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
            selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
            renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='person' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
            onPress={() => this.changeTab('profile')}>
          </Tab>
        </Tabs>
      </View>
    );

  }

}

const styles = StyleSheet.create({

  navicon: {
    paddingTop: '9%',
    paddingLeft: '7%',
    paddingBottom: '2%',
  },

});
