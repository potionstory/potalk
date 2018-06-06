const express = require('express');
const router = express.Router();

const talk = require('./talk');

router.get('/', (req, res) => {
  res.send('<h1>Welcome to potalk</h1>');
});

router.use('/talk', talk);

module.exports = router;