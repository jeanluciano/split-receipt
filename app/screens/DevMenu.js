import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Nav from './components/Nav';
import { login } from '../redux/auth';
import { getContacts } from '../redux/contacts';
import { friends } from '../../tests/testData';
import { sendDummyText } from '../../tests/testMethods'
import { updateFriends } from '../redux/friends';
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
            'jason@one.com',
            'Jasonone')
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
            this.props.loadFakeData()
            navigate('Stack')
          }}
        />
        <Button
          title="Contacts"
          color="#841584"
          onPress={() => {
            this.props.loadFakeData()
            navigate('Contacts')
          }}
        />
        <Button
          title="Edit Table"
          color="#841584"
          onPress={() => navigate('EditTable')}
        />
      </View>
    );
  }
}

const mapState = store => {
  return {
    receiptData: store.receipt.receiptData,
  };
};
const mapDispatch = { loadFakeData, login, getContacts, sendDummyText };

export default connect(mapState, mapDispatch)(DevMenu);
