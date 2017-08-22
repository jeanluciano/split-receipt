export const validateShape = function(obj, type) {
  const {
    total,
    status,
    date,
    receiptId,
    origin, destination,
    transactions,
    payer,
  } = obj;
  switch (type) {
    case 'TRANSACTION':
      return true;
    case 'USER':
      return (total && status && date && receiptId && origin && destination);
    case 'RECEIPT':
      return (date && payer && total && transactions);
    default:
      return false;
  }
}