const express = require('express');
const router = express.Router();

const talk = require('./talk');

// Default 주소에 접속
router.get('/', (req, res) => {
  res.send('<h1>Welcome to potalk</h1>');
});

// API 요청시 작업에 따라 주소를 구분
router.use('/talk', talk);

module.exports = router;