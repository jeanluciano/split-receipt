const functions = require('firebase-functions');
const request = require('request');
// const requestPrmose = require('request-promise');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

// exports.receipt = functions.https.onRequest((req, res) => {
//   request(require('./ocr')(data), async (err, googleRes, body) => {
//     if (err) {
//     	console.log(err)
//     	return next(err);
//     }
//     await googleRes, body;
//     const receiptData = await require('./analysis')(body.responses[0].textAnnotations)
//     console.log('receiptDatainpostroute', receiptData);
//     res.send(receiptData);
//   });
// })

exports.receipt = functions.https.onRequest((req, res) => {
  const data = req.body.data;
  request(require('./ocr')(data), /* async */ (err, googleRes, body) => {
    if (err) {
      console.log(err)
      res.status(400).send(err);
    }
    // await googleRes, body;
    const receiptDataPromise = /*await*/ Promise((resolve, reject) => {
      resolve(require('./analysis')(body.responses[0].textAnnotations))
    })
    receiptDataPromise
      .then((receiptData) => {
        console.log('receiptDatainpostroute', receiptData);
        res.send(receiptData);
      })
      .catch(error => res.status(400).send(error))
  });
})

// USE REQUEST PROMISE
// exports.receipt = functions.https.onRequest((req, res) => {
//   requestPromise(require('./ocr')(data))
//     .then(res => {
//       res.body
//     })

//   , async (err, googleRes, body) => {
//     if (err) {
//     	console.log(err)
//     	return next(err);
//     }
//     await googleRes, body;
//     const receiptData = await require('./analysis')(body.responses[0].textAnnotations)
//     console.log('receiptDatainpostroute', receiptData);
//     res.send(receiptData);
//   });
// })