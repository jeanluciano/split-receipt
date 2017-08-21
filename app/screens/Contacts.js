import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar, List, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { addFriend } from '../redux/friends';
import { deleteContact } from '../redux/contacts';
import fakeContacts from './components/fakecontacts';

class contacts extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this.onAddHandle = this.onAddHandle.bind(this);
    this.completeHandle = this.completeHandle.bind(this);
  }

  onAddHandle(selectedContact) {
    const { addFriend, deleteContact } = this.props;
    deleteContact(selectedContact);
    addFriend(selectedContact);
  }

  completeHandle() {
    this.props.navigation.navigate('Stack');
  }

  findContacts(query) {
    if (query === '') {
      return [];
    }
    const { myContacts } = this.props;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return myContacts.filter(contact => (
      contact.givenName.search(regex) >= 0 ||
        contact.givenName.search(regex) >= 0
    ));
  }

  render() {
    const { query } = this.state;
    const contacts = this.findContacts(query);
    return (
      <View style={styles.contacts}>
        <SearchBar
          noIcon
          round
          containerStyle={styles.SearchBar}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Who are you with?"
        />
        <List containerStyle={styles.searchContainer}>
          {contacts.map((contact, ind) => {
            const phoneNumber = contact.phoneNumbers[0].number;
            return (
              <ListItem
                key={ind}
                chevronColor="#0081D5"
                underlayColor="#374355"
                titleStyle={styles.listText}
                containerStyle={styles.listItem}
                phone={phoneNumber}
                onPress={() => this.onAddHandle(contact)}
                title={`${contact.givenName} ${contact.familyName}`}
              />
            );
          })}
        </List>
        <Button
          title="That's everybody!"
          backgroundColor="#03BD5B"
          containerViewStyle={styles.button}
          borderRadius={20}
          onPress={this.completeHandle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contacts: {
    flex: 1,
    backgroundColor: '#3D4D65',
    paddingTop: '20%'
  },
  searchContainer: {
    borderTopWidth: 0,
    height: '70%',
    backgroundColor: '#3D4D65'
  },
  SearchBar: {
    backgroundColor: '#3D4D65',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  listItem: {
    backgroundColor: '#374355',
  },
  listText: {
    color: '#8493A8',
  },
  button: {
    borderRadius: 5,
  },
});

const mapState = ({ myContacts }) => ({ myContacts });
const mapDispatch = { addFriend, deleteContact };

export default connect(mapState, mapDispatch)(contacts);
