const router = require('express').Router();
const request = require('request')

// change number to request data for different image
// const testImage = `../../__tests__/images/image1.jpg`;
// change number to analyze different dataset
const testData = require(`../../__tests__/data/data${2}`);
// const testImage = `image${2}`;

//route for requesting data from google API
router.post('/receipt', async (req, res, next) => {
  const data = req.body.data.data;
  // const receiptData = await require('../analysis')(testData)
  // console.log('***RECIEPT DATA', receiptData);
  // res.sendStatus(200);

  request(require('./ocr')(data), async (err, googleRes, body) => {
    if (err) next(err);
    await googleRes, body;
    // console.log('***TOUCH MY BODY', body.responses[0].textAnnotations);
    const receiptData = await require('../analysis')(body.responses[0].textAnnotations)
    console.log('***RECIEPT DATA', receiptData);
    // return res.json(receiptData);
    res.sendStatus(200);
  });
});

// route for testing analysis
router.get('/analysis', async (req, res, next) => {
  const receiptData = await require('../analysis')(testData);
  res.json(receiptData);
});

module.exports = router;
