import FakeReceipt from '../screens/components/fakeReceipt';

/**
 * ACTION TYPES
 */
const UPDATE_RECEIPT_DATA = 'UPDATE_RECEIPT_DATA';
const FIX_PRICE = 'FIX_PRICE';

const updateReceipt = receiptData => ({
  type: UPDATE_RECEIPT_DATA,
  receiptData,
});

const fixPrice = receipt => ({
  type: FIX_PRICE,
  receipt,
});

const initialReceiptData = [
  { item: 'Scan Receipt', price: '', duplicity: 1, id: 0 },
  { item: 'total', price: 1.0 },
];
const initialReceipt = {
  receiptData: initialReceiptData,
};

/**
 * REDUCER
 */
export default function receiptReducer(receipt = initialReceipt, action) {
  switch (action.type) {
    case UPDATE_RECEIPT_DATA:
      return Object.assign({}, receipt, { receiptData: action.receiptData });
    case FIX_PRICE:
      return Object.assign({}, receipt, {
        receiptData: receipt.receiptData.map((item) => {
          return (item.id === action.receipt.id) ? action.receipt : item
        }),
      });
    default:
      return receipt;
  }
}


/**
 * THUNK CREATORS
 */
export const updateReceiptThunkCreator = receiptData => (dispatch) => {
  if (!receiptData) {
    console.error('receiptData is not what you want it to be bro');
  } else {
    receiptData = receiptData.forEach((item, ind) => {
      item.id = ind;
    });
    dispatch(updateReceipt(receiptData));
  }
};

export const putReceipt = function (receiptData) {
  return function thunk(dispatch) {
    dispatch(fixPrice(receiptData))
  };
};

export const loadFakeData = function () {
  return function thunk(dispatch) {
    console.log('LOAD FAKE DATA', FakeReceipt)
    dispatch(updateReceiptThunkCreator(FakeReceipt))
  }
};
