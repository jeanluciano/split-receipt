const fs = require('fs');

// declare post url
const baseURL = 'https://vision.googleapis.com/v1/images:annotate';
const requestURL = baseURL + `?key=${process.env.GOOGLE_CLOUD_KEY}`;

// define vision api to target
const reqBody = {
  requests: [
    {
      image: {
        content: '',
      },
      features: [
        {
          type: 'TEXT_DETECTION',
        },
      ],
    },
  ],
};

// set req options
module.exports = (image64) => {
  reqBody.requests[0].image.content = image64;
  return {
    method: 'post',
    body: reqBody,
    json: true,
    url: requestURL,
  };
};

