const express = require('express');
const router = express.Router();
const ctrl = require('./controller');

// REST API 구성에 맞춰서 작성하고, controller에 연결
router.get('/', ctrl.find);
router.post('/', ctrl.create);

module.exports = router;