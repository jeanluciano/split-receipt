const router = require('express').Router();

const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(TWILIO_SID, TWILIO_AUTH_TOKEN);

// api/payPalMe/
router.post('/', (req, res, next) => {
  const { destinationNumber, payPalMe, amount } = req.body;
  // console.log(destinationNumber, payPalMe, amount);
  client.messages
    .create({
      to: destinationNumber,
      from: TWILIO_PHONE_NUMBER,
      body: `Please go here to pay your split www.PayPal.Me/${payPalMe}/${amount}`
    })
    .then(message => console.log(message.sid))
    .catch(console.err);

  res.sendStatus(200);
});

module.exports = router;
