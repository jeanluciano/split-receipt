import axios from 'axios';
import { putFriend } from './friends';

/**
 * ACTION TYPES
 */

/**
 * ACTION CREATORS
 */

/**
 * REDUCER
 */

/**
 * THUNK CREATORS
 */
export const sendText = (friends, user) => (dispatch) => {
  const payPalMe = user.payPalMe
  friends.map((friend) => {
    const destinationNumber = friend.phone;
    const amount = friend.total;
    if (friend.status === 'selected') {
      return axios.post('http://localhost:8000/api/payPalMe/', {
        destinationNumber,
        payPalMe,
        amount,
      })
        // update store
        // update db
        .then(() => {
          friend.payStatus = 'requested'
          return dispatch(putFriend(friend))
        })
        .catch(error => dispatch(putFriend({ error })))
    }
    return null;
  })
}

export const selectFriend = (selected) => (dispatch) => {
  // update db
  return dispatch(putFriend({ status: 'selected' }));
}

