import firebase from 'firebase';
import { validateShape } from './validation';

export const reformatReceipt = async function(receiptId) {
  let receipt = {}
  await firebase.database().ref()
    .child('receipts')
    .child(receiptId)
    .once('value', function(snapShot) {
      receipt = snapShot.val();
      receipt.id = snapShot.key;
    })
  return receipt;
}

export const firebaseUpdateReceipt = async function (receiptId, property) {
  if(property) await firebase.database().ref().child('receipts').child(receiptId).update(property);
  return await reformatReceipt(receiptId);
}

export const createReceipt = async function(receipt) {
  if(validateShape(receipt, 'RECEIPT')) {
    const firebaseReceipt = await firebase.database().ref().child('receipts').push(receipt)
  }
  const receipt = await reformatReceipt(firebaseReceipt.id);
  return receipt
}
