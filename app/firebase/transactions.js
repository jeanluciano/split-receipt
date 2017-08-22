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
      console.log('2 @ REFORMAT TRANSACTION', transaction);
      transaction.recordID = snapShot.key;
      for( var key in snapShot.items ) {
        let item = snapShot.items[key].val();
        console.log('4 @ REFORMAT TRANSACTION', item)
        item.id= key;
        items.push(item);
      }
    })
    .then(() => transaction.items = items)
  return transaction;
}

const friendToTransaction = (friend, user) => {
  console.log('1 @ FRIEND TO TRANSACTION', friend, user, Date.now()+'');
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
    date: Date.now()+'',
  } ;
}

export const firebaseUpdateTransaction = async function (transactionId, property) {
  if(property) await firebase.database().ref().child('transactions').child(transactionId).update(property);
  return await reformatTransaction(transactionId);
}

export const firebaseCreateTransaction = async function(friend, user) {
  // console.log('1 @ CREATE TRANSACTION THUNK', friend, user);
  // REMOVE FAKE ITEMS BEFORE DEPLOY
  // friend.items = fakeItems;
  console.log('4 @ CREATE TRANSACTION THUNK', friend.items);
  const transaction = await friendToTransaction(friend, user);
  if(validateShape(transaction, 'TRANSACTION')) {
    const firebaseTransaction = await firebase.database().ref().child('transactions').push(transaction);
    // FREIND.ITEMS IS CLEARED OUT BY THE TIME IT REACH HERE!
    console.log('4 @ CREATE TRANSACTION THUNK', friend.items);
    await friend.items.forEach(item => {
      firebaseTransaction.child(items).push(item);
    });
    console.log('3 @ CREATE TRANSACTION THUNK', firebaseTransaction.key);

    return await reformatTransaction(firebaseTransaction.key);
  }
  console.log('ERROR AT TRANSACTION VALIDATION FAILED');
}

export const firebaseDestroy = async function() {

}