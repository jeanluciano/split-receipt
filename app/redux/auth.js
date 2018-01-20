import {
  firebaseUpdateUser,
  firebaseLogIn,
  firebaseSignUp,
  firebaseLogOut,
  firebaseUpdateUserFrom,
} from '../firebase/auth'

/*
 * ACTION TYPES
 */
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';

/**
 * ACTION CREATORS
 */
export const removeUser = () => ({ type: REMOVE_USER });
export const updateUser = user => ({ type: UPDATE_USER, user });

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case REMOVE_USER:
      return {};
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}

/**
 * THUNK CREATORS
 */
export const login = (email, password) =>
  dispatch =>
    firebaseLogIn(email, password)
      .then(user => dispatch(updateUser(user)))

export const logout = () =>
  dispatch =>
    firebaseLogOut()
      .then(() => dispatch(removeUser()))

export const signup = (email, password, givenName, familyName) =>
  (dispatch) => {
    firebaseSignUp(email, password, givenName, familyName)
      .then(user => dispatch(updateUser(user)))
      .catch(console.error)
  }

export const userUpdate = (userId, property) =>
  dispatch =>
    firebaseUpdateUser(userId, property)
      .then(user => dispatch(updateUser(user)))
      .catch(console.error)

export const updateUserFrom = (userId, transactionId, status) =>
  dispatch =>
    firebaseUpdateUserFrom(userId, transactionId, status)
      .then(user => dispatch(updateUser(user)))
      .catch(console.error)
