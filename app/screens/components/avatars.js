import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux'
import fakeContacts from './fakecontacts';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '90%',
    paddingTop: '20%'
  },
  avatar: {
    margin: 10,
    backgroundColor: '#0081D5'
  },
});

function Avatars(props) {
  return (
    <View style={styles.container}>
      {props.friends.map(contact =>
        <Avatar
          key={contact.recordID}
          containerStyle={styles.avatar}
          rounded
          medium
          onPress={() => console.log('Works!')}
          title={`${contact.givenName[0]}${contact.familyName[0]}`}
        />
      )}
    </View>
  );
}

const mapState = ({ friends }) => ({ friends })


export default connect(mapState)(Avatars);
