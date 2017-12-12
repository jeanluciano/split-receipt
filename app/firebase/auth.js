import firebase from 'firebase';
import { validateShape } from './validation';
import { firebaseGetTransactions } from './transactions';


// GET AND CONVERT FIREBASE USER TO STORE USER
export const reformatUser = async function (userId) {
  let user = {}
  await firebase.database().ref()
    .child('users')
    .child(userId)
    .once('value', function(snapShot) {
      user = snapShot.val();
      user.id = snapShot.key;
      return user
    })
    .then(async () => {
      if(user.to) await firebaseGetTransactions(user.to)
        .then(toTransactions => {
          user.to = toTransactions
        })
      if(user.from) await firebaseGetTransactions(user.from)
        .then(fromTransactions => {
          user.from = fromTransactions
        })
    })
    .catch(console.log)
  return user;
}

// GENERAL UPDATE FUNCTION
export const firebaseUpdateUser = async function (userId, property) {
  if(property) await firebase.database().ref()
    .child('users')
    .child(userId)
    .update(property)
    .catch(console.log);
  return await reformatUser(userId);
}

// SPECIFIC UPDATE FUNCTION: FROM_TRANSACTIONS
export const firebaseUpdateUserFrom = async function (userId, transactionId, status) {
  try {
    firebase.database().ref()
      .child('users')
      .child(userId)
      .child('from')
      .child(transactionId)
      .update({ status })
      .catch(error => error);
    return await reformatUser(userId);
    
  } catch (error) {
    console.log('FIREBASE UPDATE USER', error)
    return error
  }
}

export const firebaseLogIn = async function (email, password) {
  try {
    let user = {}
    const firebaseUser = await firebase.auth().signInWithEmailAndPassword(email, password)
    return await reformatUser(firebaseUser.uid);
    return user;

  } catch (error) {
    console.log('FIREBASE UPDATE USER', error)
    return error;

  }
}

export const firebaseLogOut = async function () {
  try {
    await firebase.auth().signOut();
    return {};

  } catch (error) {
    return error

  }
}

export const firebaseSignUp = async function (email, password, givenName, familyName) {
  try {
    const firebaseUser = await firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(console.log);
    await firebaseUpdateUser(firebaseUser.uid, {email});
    await firebaseUpdateUser(firebaseUser.uid, {givenName});
    return await firebaseUpdateUser(firebaseUser.uid, {familyName});

  } catch (error) {
    console.log('FIREBASE SIGN UP', error)
    return error;

  }
}
