import firebase from 'firebase';
import { validateShape } from './validation';
import fakeItems from '../../tests/fakeItems';

export const reformatTransaction = async function(transactionId) {
  console.log('1 @ REFORMAT TRANSACTION', transactionId)
  let transaction = {};
  var items = [];
  await firebase.database().ref()
    .child('transactions')
    .child(transactionId)
    .once('value', function(snapShot) {
      transaction = snapShot.val();
      transaction.id = snapShot.key;
      for( let key in snapShot.items ) {
        let item = snapShot.items[key].val();
        item.id= key;
        items.push(item);
      }
    })
    .then(() => transaction.items = items)
    .catch(console.error)
  console.log('REFORMAT TRANSACTION',transaction);
  return transaction;
}

const friendToTransaction = (friend, user) => 
  ({to: {
      givenName: friend.givenName,
      familyName: friend.familyName,
      phone: friend.phoneNumbers[0].number,
      id: null,
    },
    from: {
      givenName: user.givenName,
      familyName: user.familyName,
      id: user.id,
    },
    purpose: '',
    status: 'ASSIGNED',
    date: Date.now()+'',
  })

export const firebaseUpdateTransaction = async function (transactionId, property) {
  if(property) await firebase.database().ref().child('transactions').child(transactionId).update(property);
  return await reformatTransaction(transactionId);
}

export const firebaseCreateTransaction = async function(friend, user) {
  try {
    if (!user.id) {
      console.log('NO USER LOGGED IN')
      throw Error('NO USER LOGGED IN');
    }
    else if (!validateShape(transaction, 'TRANSACTION')) new Error('TRANSACTION VALIDATION FAILED');
    const transaction = await friendToTransaction(friend, user);
    const firebaseTransaction = await firebase.database().ref().child('transactions').push(transaction);
    console.log('FIREBASE CREATE TRANSACTION', firebaseTransaction)
    return await reformatTransaction(firebaseTransaction.key);
  } catch (error) {
    return error
  }
  
}

export const firebaseDestroy = async function() {

}