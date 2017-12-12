import FakeReceipt from '../screens/components/fakeReceipt';

/**
 * ACTION TYPES
 */
const UPDATE_RECEIPT_DATA = 'UPDATE_RECEIPT_DATA';
const FIX_PRICE = 'FIX_PRICE';
const DELETE_ITEM = 'DELETE_ITEM';
const CREATE_ITEM = 'CREATE_ITEM';

const priceToString = (priceNum) => {
  if (!priceNum) console.error('ITEM HAS NO PRICE');
  const price = priceNum.toString().split('.')
  const dollar = price[0].padStart(1, '0');
  let cent = '';
  if (!price[1]) cent = '00';
  else cent = price[1].padEnd(2, '0');
  return `${dollar}.${cent}`;
}

const createItem = item => ({
  type: CREATE_ITEM,
  item,
});

const updateReceipt = receiptData => ({
  type: UPDATE_RECEIPT_DATA,
  receiptData,
});

const deleteItem = item => ({
  type: DELETE_ITEM,
  item,
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
        receiptData: receipt.receiptData.map(item => (item.id === action.receipt.id ? action.receipt : item)),
      });
    case CREATE_ITEM:
      console.log(action.item)
      return Object.assign({}, receipt, {
        receiptData: [...receipt.receiptData, action.item]
      });
    case DELETE_ITEM:
      return Object.assign({}, receipt, {
        receiptData: receipt.receiptData.filter(item => item.id !== action.item.id),
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
    receiptData.forEach((item, ind) => {
      if (ind === receiptData.length - 1) {
        item.id = 'total';
      } else item.id = ind
      if (item.price) item.priceString = priceToString(item.price);
    });
    dispatch(updateReceipt(receiptData));
  }
};

export const putReceipt = function (receiptData) {
  return function thunk(dispatch) {
    dispatch(fixPrice(receiptData));
  };
};

export const loadFakeData = function () {
  return function thunk(dispatch) {
    dispatch(updateReceiptThunkCreator(FakeReceipt));
  };
};

export const removeItem = function (item) {
  return function thunk(dispatch) {
    dispatch(deleteItem(item));
  };
};

export const addItem = function (item) {
  return function thunk(dispatch) {
    dispatch(createItem(item));
  };
};
