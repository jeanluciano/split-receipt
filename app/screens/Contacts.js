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
import { colors } from '../values/stylesheet';
import { width, height,totalSize } from 'react-native-dimension';

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
    this.setState({query: ''})
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
          round
          containerStyle={styles.SearchBar}
          selectionColor={colors.splitBlue}
          value={this.state.query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Who were you with?"
        />
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
        <View style={styles.buttonContainer}>
        <Button
          title="That's everybody!"
          backgroundColor={colors.splitGold}
          color={colors.splitBackground1}
          containerViewStyle={styles.button}
          borderRadius={10}
          onPress={this.completeHandle}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contacts: {
    flex: 1,
    backgroundColor: colors.splitBackground1,
    paddingTop: '10%',
  },
  searchContainer: {
    borderTopWidth: 0,
    height: '65%',
    backgroundColor: colors.splitBackground1,
  },
  SearchBar: {
    backgroundColor: colors.splitBackground1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  listItem: {
    backgroundColor: colors.splitBackground1,
  },
  listText: {
    color: colors.splitGray,
  },
  button: {

  },
  buttonContainer: {
    top: height(85),
    position: 'absolute',
    width: width(100)
  },
  friendsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  badge: {
    flexDirection: 'row',
    backgroundColor: colors.splitGold,
    margin: 5
  }
});

const mapState = ({ myContacts, friends }) => ({ myContacts, friends });
const mapDispatch = { addFriend, deleteContact, deleteFriend, addContact };

export default connect(mapState, mapDispatch)(contacts);
