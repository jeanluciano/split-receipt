import firebase from "firebase";

export const reformatUser = (userId) => {
  let user = {}
  firebase.database().ref()
    .child('users')
    .child(userId)
    .once('value', function(snapShot) {
      user = snapShot.val();
      user.id = snapShot.key;
    })
  return user;
}

export const updateFirebase = (userId, property) => {
  firebase
    .database()
    .ref()
    .child('users')
    .child(userId)
    .set(property);
  return reformatUser(userId);
}