import axios from 'axios';
import { putFriend } from './friends';

/**
 * THUNK CREATORS
 */
export const sendText = (friends, user) => (dispatch) => {
  const payPalMe = user.payPalMe
  friends.map((friend) => {
    const destinationNumber = friend.phone;
    const amount = friend.total;
    axios.post('http://localhost:8000/api/payPalMe/', {
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
