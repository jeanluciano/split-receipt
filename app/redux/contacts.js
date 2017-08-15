import Contacts from 'react-native-contacts';

const READ_CONTACTS = 'READ_CONTACTS';
const REMOVE_CONTACT = 'REMOVE_CONTACT';

const readContacts = contacts => ({ type: READ_CONTACTS, contacts });
const removedContact = contact => ({ type: REMOVE_CONTACT, contact });

export default function contactsReducer(state = [], action) {
  switch (action.type) {
    case READ_CONTACTS:
      return [...action.contacts];
    case REMOVE_CONTACT:
      return state.filter(reviews => reviews !== action.review);
    default:
      return state;
  }
}



