import firebase from 'firebase';
import { validateShape } from './validation';
import { firebaseGetTransaction } from './transactions';

export const reformatUser = async function (userId) {
  let user = {}
  await firebase.database().ref()
    .child('users')
    .child(userId)
    .once('value', function(snapShot) {
      user = snapShot.val();
      user.id = snapShot.key;
    })
    .catch(console.log)
  return user;
}

export const firebaseUpdateUser = async function (userId, property) {
  console.log('UPDATE USER', userId, property);
  if(property) await firebase.database().ref()
    .child('users')
    .child(userId)
    .update(property)
    .catch(console.log);
  return await reformatUser(userId);
}

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
    await firebase.database().ref()
      .child('users')
      .child(firebaseUser.uid)
      .once('value', function(snapShot) {
        user = snapShot.val();
        user.id = snapShot.key;
      });
    // user = await user.to.firebaseGetTransaction(user);
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
    console.log('FIREBASE SIGN UP', firebaseUser);
    await firebaseUpdateUser(firebaseUser.uid, {email});
    await firebaseUpdateUser(firebaseUser.uid, {givenName});
    return await firebaseUpdateUser(firebaseUser.uid, {familyName});
    
  } catch (error) {
    console.log('FIREBASE SIGN UP', error)
    return error;

  }
}
