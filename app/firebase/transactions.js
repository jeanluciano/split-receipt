import firebase from 'firebase';
import { validateShape } from './validation';
import fakeItems from '../../tests/fakeItems';

export const reformatTransaction = async function(transactionId) {
  let transaction = {};
  await firebase.database().ref()
    .child('transactions')
    .child(transactionId)
    .once('value', function(snapShot) {
      transaction = snapShot.val();
      transaction.id = snapShot.key;
    })
    .catch(console.error)
  return transaction;
}

const totalGetter = items => {
  let total = 0;
  items.forEach((item) => {
    total += item.price;
  });
  return Math.round(total * 100) / 100;
}

const friendToTransaction = (friend, user) => {
  return ({
    to: {
      givenName: friend.givenName,
      familyName: friend.familyName,
      phone: friend.phoneNumbers[0].number,
      id: null,
    },
    items: friend.items,
    from: {
      givenName: user.givenName,
      familyName: user.familyName,
      id: user.id,
    },
    purpose: '',
    status: 'ASSIGNED',
    date: Date.now()+'',
    total: totalGetter(friend.items)
  })
}

export const firebaseUpdateTransaction = async function (transactionId, property) {
  try {
    if(property) await firebase.database().ref()
      .child('transactions')
      .child(transactionId)
      .update(property);
    return await reformatTransaction(transactionId);
  } catch (error) {
    console.log('FIREBASE UPDATE TRANSACTION', error)
    return error
  }
}

export const firebaseCreateTransaction = async function(friend, user) {
  try {
    if (!user) throw Error('NO USER LOGGED IN');
    if (!user.id) throw Error('NO USER LOGGED IN');
    const transaction = await friendToTransaction(friend, user);
    const firebaseTransaction = await firebase.database().ref().child('transactions').push(transaction);
    if (!validateShape(transaction, 'TRANSACTION')) new Error('TRANSACTION VALIDATION FAILED');
    return await reformatTransaction(firebaseTransaction.key);
  } catch (error) {
    console.log('FIREBASE CREATE TRANSACTION', error)
    return error
  }

}

export const firebaseGetTransactions = (transactionsObj) => {
  try {
    const transactionsPromiseArray = [];
    for(key in transactionsObj){
      transactionsPromiseArray.push(
      firebase.database().ref()
        .child('transactions')
        .child(key)
        .once('value')
        .then(function(snapShot) {
          transaction = {}
          transaction = snapShot.val();
          transaction.id = snapShot.key;
          return transaction;

        })
        .catch(console.error)
      )
    }
    return Promise.all(transactionsPromiseArray)

  } catch (e){
    throw e;
  }
}

export const firebaseDestroy = async function() {

}
