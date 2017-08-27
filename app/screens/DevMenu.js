import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/auth';
import { getContacts } from '../redux/contacts';
import { friends } from '../../tests/testData';
import { sendDummyText } from '../../tests/testMethods'
import { loadFakeData } from '../redux/receipt'
import { masterStyle } from '../values/stylesheet'


class DevMenu extends Component {

  componentDidMount() {
    this.props.getContacts()
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={masterStyle.body}>
        <Text>DevMenu</Text>
        <Button
          title="Log In"
          color="#841584"
          onPress={() => navigate('Login')}
        />
        <Button
          title="Send Text"
          color="#841584"
          onPress={() =>
            this.props.sendDummyText(friends, () => navigate('SendText'))}
        />
        <Button
          title="Main"
          color="#841584"
          onPress={() => navigate('Main')}
        />
        <Button
          title="Login with Dummy"
          color="#841584"
          onPress={() => this.props.login(
            'ross@friends.com',
            'Rossfriends')
          }
        />
        <Button
          title="Camera"
          color="#841584"
          onPress={() => {
            navigate('Camera')
          }}
        />
        <Button
          title="Stack"
          color="#841584"
          onPress={() => {
            this.props.loadFakeData();
            navigate('Stack');
            this.props.login(
              'ross@friends.com',
              'Rossfriends')
          }}
        />
        <Button
          title="Contacts"
          color="#841584"
          onPress={() => {
            this.props.loadFakeData();
            navigate('Contacts');
            this.props.login(
              'ross@friends.com',
              'Rossfriends');
          }}
        />
        <Button
          title="Landing"
          color="#841584"
          onPress={() => {
            this.props.loadFakeData();
            navigate('Landing');
            this.props.login(
              'ross@friends.com',
              'Rossfriends');
          }}
        />
        <Button
          title="Edit Table"
          color="#841584"
          onPress={() => {
            this.props.loadFakeData()
            navigate('EditTable');
            // this.props.login(
            //   'ross@friends.com',
            //   'Rossfriends')
          }}
        />
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    receiptData: state.receipt.receiptData,
  };
};
const mapDispatch = { loadFakeData, login, getContacts, sendDummyText };

export default connect(mapState, mapDispatch)(DevMenu);
