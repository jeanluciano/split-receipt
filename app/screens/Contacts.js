import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  SearchBar,
  List,
  ListItem,
  Button,
  Badge,
  Icon,
} from 'react-native-elements';
import { connect } from 'react-redux';
import { addFriend, deleteFriend } from '../redux/friends';
import { deleteContact, addContact } from '../redux/contacts';
// import fakeContacts from './components/fakecontacts';

class contacts extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this.onAddHandle = this.onAddHandle.bind(this);
    this.completeHandle = this.completeHandle.bind(this);
    this.onRemoveFriend = this.onRemoveFriend.bind(this)
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
    return myContacts.filter(
      contact =>
        contact.givenName.search(regex) >= 0 ||
        contact.givenName.search(regex) >= 0,
    );
  }

  onRemoveFriend(friend){
    this.props.addContact(friend)
    this.props.deleteFriend(friend)
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
            return (
              <ListItem
                key={ind}
                hideChevron
                underlayColor="#374355"
                titleStyle={styles.listText}
                containerStyle={styles.listItem}
                onPress={() => this.onAddHandle(contact)}
                title={`${contact.givenName} ${contact.familyName}`}
              />
            );
          })}
        </List>
        
        <View style={styles.friendsContainer}>
        {this.props.friends.map((friend, ind) => {
          return (
            <Badge 
            key={ind}
            containerStyle={styles.badge}>
              <Text>
                {friend.givenName}
              </Text>
              <Icon size={20} name="close" 
              type="evilicon" 
              color="black"
              onPress={() => this.onRemoveFriend(friend)}
              underlayColor='transparent'
               />
            </Badge>
          )
        })}
      </View>
        
        <Button
          title="That's everybody!"
          backgroundColor="#03BD5B"
          containerViewStyle={styles.button}
          borderRadius={25}
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
    paddingTop: '20%',
  },
  searchContainer: {
    borderTopWidth: 0,
    height: '55%',
    backgroundColor: '#3D4D65',
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
    marginBottom:40

  },
  friendsContainer: {
    height:'20%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingRight: 20,
    paddingLeft: 20,
  },
  badge: {
    flexDirection: 'row',
    backgroundColor: '#0081D5',
    margin: 5
  }
});

const mapState = ({ myContacts, friends }) => ({ myContacts, friends });
const mapDispatch = { addFriend, deleteContact, deleteFriend, addContact };

export default connect(mapState, mapDispatch)(contacts);
