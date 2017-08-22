import firebase from 'firebase';
import { validateShape } from './validation';

export const reformatTransaction = async function(transactionId) {
  let transaction = {}
  await firebase.database().ref()
    .child('transactions')
    .child(transactionId)
    .once('value', function(snapShot) {
      transaction = snapShot.val();
      transaction.recordID = snapShot.key;
      transaction.items = [];
      for( var id in snapShot.items ) {
        let item = snapShot.items[id].val();
        item.id = id;
        transaction.items.push(item);
      }
    })
  return transaction;
}

const friendToTransaction = (friend, user) => {
  return {
    to: {
      givenName: friend.givenName,
      familyName: friend.familyName,
    },
    from: {
      givenName: user.givenName,
      familyName: user.familyName,
      id: user.id,
    },
    purpose: '',
    status: 'UNPAID',
    date: Date.now().toString(),
  } ;
}

export const firebaseUpdateTransaction = async function (transactionId, property) {
  if(property) await firebase.database().ref().child('transactions').child(transactionId).update(property);
  return await reformatTransaction(transactionId);
}

export const firebaseCreateTransaction = async function(friend, user) {
  console.log('1 @ CREATE TRANSACTION THUNK')
  const transaction = await friendToTransaction(friend, user);
  console.log('2 @ CREATE TRANSACTION THUNK')
  if(validateShape(transaction, 'TRANSACTION')) {
    const firebaseTransaction = await firebase.database().ref().child('transactions').push(transaction);
    friend.items.forEach(item => firebaseTransaction.push(item));
    console.log('3 @ CREATE TRANSACTION THUNK')

    return await reformatTransaction(firebaseTransaction.id);
  }
  console.log('4 @ CREATE TRANSACTION THUNK')
  console.log('ERROR AT TRANSACTION VALIDATION FAILED');
}

export const firebaseDestroy = async function() {

}