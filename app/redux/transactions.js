import {
  firebaseCreateTransaction,
  firebaseUpdateTransaction,
  firebaseDestroy,
  firebaseGetTransactions,
} from '../firebase/transactions';
import { updateUser } from './auth';

/**
 * ACTION TYPES
 */
const CREATE_TRANSACTIONS = 'CREATE_TRANSACTIONS';
const READ_TRANSACTIONS = 'READ_TRANSACTIONS';
const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
const DESTROY_TRANSACTION = 'DESTROY_TRANSACTIONS';

/**
 * ACTION CREATORS
 */
const createTransaction = transaction => ({ type: CREATE_TRANSACTIONS, transaction });
const readTransaction = () => ({ type: READ_TRANSACTIONS });
const updateTransaction = transaction => ({ type: UPDATE_TRANSACTION, transaction });
const destroyTransaction = transaction => ({ type: DESTROY_TRANSACTION, transaction });

/**
 * REDUCER
 */
export default function transactionsReducer(transactions = [], action) {
  switch (action.type) {
    case CREATE_TRANSACTIONS:
      return [...transactions, action.transaction];
    case READ_TRANSACTIONS:
      return [...transactions];
    case UPDATE_TRANSACTION:
      return transactions.map(transaction => (transaction.id === action.transaction.id ? action.transaction : transaction));
    case DESTROY_TRANSACTION:
      return transactions.filter(transaction => transaction.id !== action.transaction.id);
    default:
      return transactions;
  }
}

/**
 * THUNK CREATORS
 */
// export const getTransactionsOnToUser = (user) =>
//   dispatch =>
//     firebaseGetTransactions(user)
//       .then(user => {
//         console.log('GET TRANSACTIONS THUNK', updateUser)
//         dispatch(updateUser(user))
//       })
//       .catch((error) => {
//         console.log('GET TRANSACTIONS THUNK', error)
//         return dispatch(createTransaction({ error }))
//       });


export const addTransaction = (friend, user) =>
  dispatch =>
    firebaseCreateTransaction(friend, user)
      .then(transaction => dispatch(createTransaction(transaction)))
      .catch(error => {
        console.log('ADD TRANSACTION THUNK', error)
        return dispatch(createTransaction({ error }))
      });


export const putTransaction = (transaction, property) =>
  dispatch => {
    console.log('PUT TRANSACTION', transaction, property)
    firebaseUpdateTransaction(transaction.id, property)
      .then(transaction => dispatch(updateTransaction(transaction)))
      .catch((error) => {
        console.log('UPDATE TRANSACTION THUNK', error)
        return dispatch(updateTransaction({ error }))
      });
  }


export const deleteTransaction = transaction =>
  dispatch =>
    firebaseDestroy(transaction)
      .then(dispatch(destroyTransaction(transaction)))
