const express = require('express');
const router = express.Router();
const ctrl = require('./controller');

router.get('/', ctrl.find);
router.post('/', ctrl.create);

module.exports = router;