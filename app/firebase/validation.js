export const validateShape = function(obj, type) {
  switch(type) {
    case 'TRANSACTION':
      const {total, status, date, receiptId, origin, destination, items } = obj
      return (total && status && date && receiptId && origin && destination);
    case 'USER':
      const {total, status, date, receiptId, origin, destination, items } = obj
      return (total && status && date && receiptId && origin && destination);
    case 'RECEIPT':
      const { date, payer, total, transactions } = obj
      return (date && payer && total && transactions);
    default:
      return false;
  }
}