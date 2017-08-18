const UPDATE_RECEIPT_DATA = 'UPDATE_RECEIPT_DATA';

const updateReceipt = receiptData => ({ type: UPDATE_RECEIPT_DATA, receiptData });

const initialReceiptData = [{ item: 'Hot Dog', price: 1.0, duplicity: 1 }, { item: 'total', price: 1.0 }];
const initialReceipt = {
  receiptData: initialReceiptData,
};

export default function receiptReducer(receipt = initialReceipt, action) {
  switch (action.type) {
    case UPDATE_RECEIPT_DATA:
      return Object.assign({}, receipt, { receiptData: action.receiptData });
    default:
      return receipt;
  }
}

export const updateReceiptThunkCreator = receiptData => dispatch => {
  if (!receiptData) console.error('receiptData is not what you want it to be bro');
  else dispatch(updateReceipt(receiptData));
}
