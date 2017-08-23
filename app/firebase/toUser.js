import firebase from 'firebase';

export const firebaseUpdateToUser = function (phone, transactionId, status) {
  try {
    return firebase.database().ref('users')
      .orderByChild('phone')
      .equalTo(phone)
      .child('to')
      .child(transactionId)
      .update({ status })
      .catch(error => error);
    return true;
  } catch (error) {
    return error;
  }
}
