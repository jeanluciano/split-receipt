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
      transaction.recordID = snapShot.key;
      for( let key in snapShot.items ) {
        let item = snapShot.items[key].val();
        item.id= key;
        items.push(item);
      }
    })
    .then(() => transaction.items = items)
  return transaction;
}

const friendToTransaction = (friend, user) => 
  ({to: {
      givenName: friend.givenName,
      familyName: friend.familyName,
      phone: friend.phone,
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
  const transaction = await friendToTransaction(friend, user);
  if(validateShape(transaction, 'TRANSACTION')) {
    const firebaseTransaction = await firebase.database().ref().child('transactions').push(transaction);
    return await reformatTransaction(firebaseTransaction.key);
  }
  return new Error('TRANSACTION VALIDATION FAILED');
  
}

export const firebaseDestroy = async function() {

}