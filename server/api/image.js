const router = require('express').Router();

// change number to request data for different image
const testImage = `../../__tests__/images/image${1}.jpg`;
// change number to analyze different dataset
const testData = require(`../../__tests__/data/data${1}`);

//route for requesting data from google API
router.post('/receipt', (req, res, next) => {
	console.log('RECEIPT API', req.body);
	res.sendStatus(200);
 //    request(require('../ocr')(testImage), async (err, googleRes, body) => {
 //        if (err) next(err);
 //        await googleRes, body;
 //        return res.json(body.responses[0].textAnnotations);
 //    });
});

// route for testing analysis
router.get('/analysis', async (req, res, next) => {
  const receiptData = await require('../analysis')(testData);
  res.json(receiptData);
});

module.exports = router;
