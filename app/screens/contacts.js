import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';
import Pagination from './components/pagination';

const fakeContacts = require('./components/fakecontacts');

class contacts extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      contacts: [],
      group: [],
    };
    this.onAddHandle = this.onAddHandle.bind(this)
  }

  componentDidMount() {
    this.setState({ contacts: fakeContacts });
  }


  onAddHandle(contact) {
    this.setState({ group: [...this.state.group, contact] });
  }


  findContacts(query) {
    if (query === '') {
      return [];
    }
    const { contacts } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return contacts.contacts.filter(contact => contact.givenName.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const contacts = this.findContacts(query)
    return (
      <View>
        <SearchBar
          noIcon
          round
          onChangeText={text => this.setState({ query: text })}
          placeholder="Who are you with?"
        />
        <List>
          {contacts.map((contact, ind) =>{
              const phoneNumber = contact.phoneNumbers[0].number;
              return (
                  <ListItem
                  key={ind}
                  phone={phoneNumber}
                  onPress={() => this.onAddHandle(contact)}
                  title={contact.givenName +' '+  contact.familyName}
                  />
              )
          })}
        </List>
        <Pagination group={this.state.group} />
      </View>
    );
  }
}

export default contacts;
