import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar, List, ListItem, Button } from "react-native-elements";
import Pagination from "./components/pagination";

const fakeContacts = require("./components/fakecontacts");

class contacts extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      contacts: [],
      group: []
    };
    this.onAddHandle = this.onAddHandle.bind(this);
  }

  componentDidMount() {
    let fakeArr = fakeContacts.contacts.map(person => person);

    this.setState({ contacts: fakeArr });
  }

  onAddHandle(selectedContact) {
    const { contacts, group } = this.state;
    const newContacts = contacts.filter(
      contact => contact.recordID !== selectedContact.recordID
    );
    this.setState({
      contacts: newContacts,
      group: [...group, selectedContact]
    });
  }

  findContacts(query) {
    if (query === "") {
      return [];
    }
    const { contacts } = this.state;
    const regex = new RegExp(`${query.trim()}`, "i");
    return contacts.filter(contact => contact.givenName.search(regex) >= 0);
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
                title={contact.givenName + " " + contact.familyName}
              />
            );
          })}
        </List>
        <Button
          title="That's everybody!" 
          backgroundColor="#03BD5B"
          containerViewStyle={styles.button}
          borderRadius={5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contacts: {
    flex: 1,
    backgroundColor: "#3D4D65"
  },
  searchContainer: {
    borderTopWidth: 0
  },
  SearchBar: {
    backgroundColor: "#3D4D65",
    borderWidth: 0,
    borderBottomWidth: 0
  },
  listItem: {
    backgroundColor: "#374355"
  },
  listText: {
    color: "#8493A8"
  },
  button: {
    borderRadius:5
  }
});

export default contacts;
