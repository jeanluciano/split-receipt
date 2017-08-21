export const validateShape = function(obj, type) {
  let {
    total,
    status,
    date,
    receiptId,
    origin, destination,
    items,
    transactions,
    payer,
  } = obj;
  switch(type) {
    case 'TRANSACTION':
      return (total && status && date && receiptId && origin && destination);
    case 'USER':
      return (total && status && date && receiptId && origin && destination);
    case 'RECEIPT':
      return (date && payer && total && transactions);
    default:
      return false;
  }
}