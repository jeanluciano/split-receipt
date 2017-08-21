import {
  firebaseUpdateUser,
  firebaseLogIn,
  firebaseSignUp,
  firebaseLogOut,
} from '../firebase/auth'

 * ACTION TYPES
 */
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';

/**
 * ACTION CREATORS
 */
const removeUser = () => ({ type: REMOVE_USER });
const updateUser = user => ({ type: UPDATE_USER, user });

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
      .then(user => dispatch(updateUser(user)))

export const signup = (email, password) =>
  dispatch =>
    firebaseSignUp(email, password)
      .then(user => dispatch(updateUser(user)))

export const update = (userId, property) =>
  dispatch =>
    firebaseUpdateUser(userId, property)
      .then(() => dispatch(removeUser()))
