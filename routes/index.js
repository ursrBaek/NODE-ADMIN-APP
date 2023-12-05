var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '백나라' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '백나라' });
});

module.exports = router;
