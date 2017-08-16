const router = require('express').Router();
const request = require('request')

//route for requesting data from google API
router.post('/receipt', async (req, res, next) => {
  const data = req.body.data;
  request(require('./ocr')(data), async (err, googleRes, body) => {
    if (err) next(err);
    await googleRes, body;
    const receiptData = await require('../analysis')(body.responses[0].textAnnotations)
    return res.json(receiptData);
  });
});

module.exports = router;
