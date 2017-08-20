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
export const sendText = (friends, payPalMe) => (dispatch) => {
  friends.map((friend) => {
    const destinationNumber = friend.phone;
    const amount = friend.total;
    return axios.post('http://localhost:8000/api/payPalMe/', {
      destinationNumber,
      payPalMe,
      amount,
    })
      // update store
      .then(() => {
        friend.payStatus = 'requested'
        return dispatch(putFriend(friend))
      })
      .catch(error => dispatch(putFriend({ error })))
  })
}
