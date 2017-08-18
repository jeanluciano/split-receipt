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
const reformatUser = (userId) => {
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

const updateFirebase = (userId, property) => {
  firebase
    .database()
    .ref()
    .child('users')
    .child(userId)
    .set(property);
  return reformatUser(userId);
}

export const signup = (email, password,navigate) =>
  (dispatch) => {
    const signup = async function (email, password) {
      try {
        const firebaseUser = await firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(console.err);
        const user = await updateFirebase(firebaseUser.uid, { email });
        navigate('LinkAccounts');
        return dispatch(updateUser(user));

      } catch (error) {
        console.log(error.toString())
        return dispatch(updateUser({ error }));

      }
    }
    return signup(email, password);

  };

export const login = (email, password, navigate) =>
  dispatch => {
    const firebaseLogin = async function (email, password) {
      try {
        const firebaseUser = await firebase.auth()
          .signInWithEmailAndPassword(email, password);
        const user = reformatUser (firebaseUser.uid);
        await navigate('LinkAccounts')
        return dispatch(updateUser(user));

      } catch (error) {
        console.log(error.toString())
        return dispatch(updateUser({ error }));
      }
    }
    return firebaseLogin(email, password);
  }

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then((res) => {
        dispatch(removeUser());
      })
      .catch(err => console.log(err));

export const updateProfile = (firstName, lastName, email) =>
  dispatch =>
    axios.put('/api/user/', { firstName, lastName, email })
      .then((res) => {
        dispatch(updateUser(res.data));
      })
      .catch(console.log);
