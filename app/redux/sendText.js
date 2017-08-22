import axios from 'axios';
import { putTransactions } from './transactions';

/**
 * ENUM VALUES
 */
const SELECTED = 'SELECTED';
const REQUESTED = 'REQUESTED';
const PAID = 'PAID'

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
    const destinationNumber = transaction.phone;
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
          transaction.status = REQUESTED
          return dispatch(putTransactions(transaction))
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

