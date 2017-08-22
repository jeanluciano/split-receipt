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
  const payPalMe = user.payPalMe
  transactions.map((transaction) => {
    const destinationNumber = transaction.to.phone;
    const amount = transaction.total;
    if (transaction.status === SELECTED) {
      return axios.post('http://localhost:8000/api/payPalMe/', {
        destinationNumber,
        payPalMe,
        amount,
      })
        // update store
        // update db
        .then(() => {
          const property = REQUESTED
          dispatch(putTransactions(transaction.id, property));
          // update users.from.child(tid)
          dispatch(userUpdateTo(user.id, transaction.id, REQUESTED));
          dispatch(firebaseUserIfExist(transaction.to.phone));
          // dispatch(firebaseUpdateUser());
          // dispatch(firebaseUserIfExist());
        })
        .catch(error => dispatch(putTransactions({ error })))
    }
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

