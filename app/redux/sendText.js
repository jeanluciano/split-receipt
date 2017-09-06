import axios from 'axios';
import { putTransaction } from './transactions';
import { updateUserFrom } from './auth';
import { firebaseUpdateToUser } from '../firebase/toUser'
// import { helloWorld } from '../../functions'

/**
 * ENUM VALUES
 */
const SELECTED = 'SELECTED';
const REQUESTED = 'REQUESTED';
const SETTLED = 'SETTLED';

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
  const payPalMe = user.payPalMe
  // return axios.get('https://us-central1-split-receipt-6572b.cloudfunctions.net/helloWorld')
  //   .then(res => console.log(res.data))
  return transactions.map((transaction) => {
    const destinationNumber = transaction.to.phone;
    const amount = transaction.total;
    const phone = transaction.to.phone;
    return axios.post('http://' + process.env.IP_ADDRESS +':8000/api/payPalMe/', {
      destinationNumber,
      payPalMe,
      amount,
      transaction,
    }).then(() => dispatch(putTransaction(transaction, { status: REQUESTED })))
      .then(() => dispatch(updateUserFrom(user.id, transaction.id, REQUESTED)))
      .then(() => firebaseUpdateToUser(phone, transaction.id, REQUESTED))
      .catch(console.error)
  })
}

export const selectTransaction = (transaction, status) => (dispatch) => {
  // update db
  if (transaction.status !== PAID) {
    transaction.status = status
    return dispatch(putTransactions(transaction));
  } else {
    const error = new Error('transaction is paid already')
    return dispatch(putTransactions({ error }))
  }
}

