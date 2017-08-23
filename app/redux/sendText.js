import axios from 'axios';
import { putTransactions } from './transactions';
import { userUpdateTo } from './auth';

/**
 * ENUM VALUES
 */
const SELECTED = 'SELECTED';
const REQUESTED = 'REQUESTED';
const PAID = 'SETTLED'

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
export const sendText = (transactions, user) => (dispatch) => {
  if (!user) throw Error('NO USER LOGGED IN');
  if (!user.id) throw Error('NO USER LOGGED IN');
  console.log('SEND TEXT', user);
  const payPalMe = user.payPalMe
  transactions.map((transaction) => {
    const destinationNumber = transaction.to.phone;
    const amount = transaction.total;
    // if (transaction.status === SELECTED) {
      return axios.post('http://localhost:8000/api/payPalMe/', {
        destinationNumber,
        payPalMe,
        amount,
      })
        .then(() => {
          console.log('SEND TEXT 2', transaction)
          const property = REQUESTED
          dispatch(putTransactions(transaction.id, property));
          dispatch(userUpdateTo(user.id, transaction.id, REQUESTED));
          // dispatch(firebaseUserIfExist(transaction.to.phone));
          // dispatch(firebaseUserIfExist());
        })
        .catch(error => dispatch(putTransactions({ error })))
    // }
    return null;
  })
}

export const selectTransaction = (transaction, status) => (dispatch) => {
  // update db
  if (transaction.status !== PAID) {
    transaction.status = status
    return dispatch(putTransactions(transaction));
  }
  else {
    const error = new Error('transaction is paid already')
    return dispatch(putTransactions({ error }))
  }
}

