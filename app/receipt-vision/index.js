const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080; //set port to listen on
const testImage = `./tests/images/image${1}.jpg` //change number to request data for different image
const testData = require(`./tests/data/data${1}`); //change number to analyze different dataset

const app = express();

const createApp = async () => {

    //logging middleware
    app.use(morgan('dev'));

    //body parsing middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //route for requesting data from google API
    app.get('/receipt', (req, res, next) => {
        request(require('./ocr')(testImage), async (err, googleRes, body) => {
            if (err) next(err);
            await googleRes, body;
            res.json(body.responses[0].textAnnotations);
        });
    });

    // route for testing analysis
    app.get('/analysis', async (req, res, next) => {
        const receiptData = await require('./analysis')(testData);
        res.json(receiptData);
    });

    //error handler
    app.use((err, req, res, next) => {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });

};

const startListening = () => app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

createApp().then(startListening);