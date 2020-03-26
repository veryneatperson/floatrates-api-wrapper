const express = require('express');
const request = require('request');
const cors = require('cors');

const BASE_FLOATRATES_URL = 'http://www.floatrates.com/daily';

const app = express();

app.get('/:curr', cors(), (req, res, next) => {
  const curr = req.params.curr.split('.')[0];

  request({
    url: `${BASE_FLOATRATES_URL}/${curr}.json`
  }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return next(new Error('Floatrates API responded with error or statusCode !== 200'));
    }

    const rates = JSON.parse(body);

    if (!(Boolean(rates["usd"]) || Boolean(rates["eur"]))) {
      return next(new Error('Floatrates API returned unexpected data'));
    }

    return res.json(rates);
  })
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening for requests on ${PORT}`));