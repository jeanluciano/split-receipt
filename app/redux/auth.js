import firebase from "firebase";
/**
 * ACTION TYPES
 */
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const removeUser = () => ({ type: REMOVE_USER });
const updateUser = user => ({ type: UPDATE_USER, user });

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case REMOVE_USER:
      return defaultUser;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}

/**
 * THUNK CREATORS
 */
// export const me = () =>
//   dispatch =>
//     axios.get('/auth/me')
//       .then(res =>
//         dispatch(updateUser(res.data || defaultUser)))
//       .catch(err => console.log(err));
const reformatUser = async (userId) => {
  let user = {}
  await firebase.database().ref()
    .child('users')
    .child(userId)
    .once('value', function(snapShot) {
      user = snapShot.val();
      user.id = snapShot.key;
    })
  return user;
}

const firebaseUpdateUser = (userId, property) => {
  if(property) firebase.database().ref().child('users').child(userId).update(property);
  return reformatUser(userId);
}

const firebaseLogIn = async function (email, password) {
  try {
    let user = {}
    const firebaseUser = await firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(console.err)
    await firebase.database().ref().child('users').child(firebaseUser.uid)
      .once('value', function(snapShot) {
        user = snapShot.val();
        user.id = snapShot.key;
      });
    return user;

  } catch (error) {
    return error;
  }
}

const firebaseSignUp = async function (email, password) {
  try {
    const firebaseUser = await firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(console.err);
    const user = await firebaseUpdateUser(firebaseUser.uid, { email });
    return user

  } catch (error) {
    return error;

  }
}


export const login = (email, password, navigate) =>
  dispatch =>
    firebaseLogIn(email, password)
      .then(user => dispatch(updateUser(user)))
      .then(() => navigate('Camera'))
      .catch(console.error)


export const signup = (email, password, navigate) =>
  dispatch => 
    firebaseSignUp(email, password)
      .then(user => dispatch(updateUser(user)))
      .then(() => navigate('LinkAccounts'))
      .catch(console.error);


export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then((res) => {
        dispatch(removeUser());
      })
      .catch(console.error);


export const update = (userId, property, navigate) => 
  dispatch => 
    firebaseUpdateUser(userId, property)
      .then(user => dispatch(updateUser(user)))
      .then(() => navigate('DevMenu'))
      .catch(console.error);

