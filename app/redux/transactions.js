import {
  firebaseCreateTransaction,
  firebaseUpdateTransaction,
  firebaseDestroy,
} from '../firebase/transactions'

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
      return transactions.map(transaction => (transaction.recordID === action.transaction.recordID ? action.transaction : transaction));
    case DESTROY_TRANSACTION:
      return transactions.filter(transaction => transaction.recordID !== action.transaction.recordID);
    default:
      return transactions;
  }
}

/**
 * THUNK CREATORS
 */
export const getTransaction = () =>
  dispatch =>
    firebaseGetTransaction()
      .then(transaction => dispatch(readTransaction()))


export const addTransaction = (friend, user) =>
  dispatch =>
    firebaseCreateTransaction(friend, user)
      .then(transaction => dispatch(createTransaction(transaction)))
      .catch(error => dispatch(createTransaction({ error })));


export const putTransaction = transaction =>
  dispatch =>
    firebaseUpdateTransaction(transaction)
      .then(transaction => dispatch(updateTransaction(transaction)))
      .catch(error => dispatch(updateTransaction({ error })));

export const deleteTransaction = transaction =>
  dispatch =>
    firebaseDestroy(transaction)
      .then(dispatch(destroyTransaction(transaction)))
