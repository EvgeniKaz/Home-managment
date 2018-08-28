var express = require('express')
var router = express.Router();
var TodoCtrl = require('../controllers/TodoCtrl.js')

router.get('/todos', TodoCtrl.getAll)

router.post('/todos', TodoCtrl.add)

module.exports = router;