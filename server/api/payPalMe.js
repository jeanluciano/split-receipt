const router = require('express').Router();

const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(TWILIO_SID, TWILIO_AUTH_TOKEN);

// api/payPalMe/
router.post('/', (req, res, next) => {
  const { payPalMe, amount } = req.body;
  let { destinationNumber } = req.body;
  destinationNumber = '+1' + destinationNumber;
  client.messages
    .create({
      to: destinationNumber,
      from: TWILIO_PHONE_NUMBER,
      body: `Please go here to pay your split www.PayPal.Me/${payPalMe}/${amount}`,
    })
    .then(message => console.log(destinationNumber, message.sid))
    .then(res.sendStatus(200))
    .catch(next);
});

module.exports = router;
