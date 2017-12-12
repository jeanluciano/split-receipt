const router = require('express').Router();

const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(TWILIO_SID, TWILIO_AUTH_TOKEN);

// api/payPalMe/
router.post('/', (req, res, next) => {
  const { payPalMe, amount, transaction } = req.body;
  let { destinationNumber } = req.body;
  const fromName = `${transaction.from.givenName} ${transaction.from.familyName}`;
  const toName = `${transaction.to.givenName} ${transaction.to.familyName}`;
  destinationNumber = `+1${destinationNumber}`;
  client.messages
    .create({
      to: destinationNumber,
      from: TWILIO_PHONE_NUMBER,
      body:
        `
        Hi ${toName}! \n${fromName} has requested a payment ${transaction.purpose ? (` for ${transaction.purpose}`) : ''}. \nYou have ordered: \n${transaction.items.map(item => (`${item.item} --- ${item.price}\n`))} \nTOTAL --- ${transaction.total}\nPay here: www.PayPal.Me/${payPalMe}/${amount}`,
    })
    .then(message => console.log(destinationNumber, message.sid))
    .then(res.sendStatus(200))
    .catch(next);
  // console.log('PAYMENT REQUESTED:', destinationNumber, amount, payPalMe)
  // res.sendStatus(200);
});

module.exports = router;
