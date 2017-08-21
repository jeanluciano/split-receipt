import firebase from 'firebase';
import { validateShape } from './validation';

export const reformatTransaction = async function(transactionId) {
  let transaction = {}
  await firebase.database().ref()
    .child('transactions')
    .child(transactionId)
    .once('value', function(snapShot) {
      transaction = snapShot.val();
      transaction.id = snapShot.key;
    })
  return transaction;
}

export const firebaseUpdateTransaction = async function (transactionId, property) {
  if(property) await firebase.database().ref().child('transactions').child(transactionId).update(property);
  return await reformatTransaction(transactionId);
}

export const createTransaction = async function(transaction) {
  if(validateShape(transaction, 'TRANSACTION')) {
    const firebaseTransaction = await firebase.database().ref().child('transactions').push(transaction)
  }
  return await reformatTransaction(firebaseTransaction.id);
}
