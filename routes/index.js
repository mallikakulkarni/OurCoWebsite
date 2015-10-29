var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/bigdata', function(req, res, next) {
    res.render('bigdata');
});

router.get('/brochure', function(req, res, next) {
    res.render('brochure');
});

router.get('/whitepaper', function(req, res, next) {
    res.render('whitepaper');
});

router.get('/iot', function(req, res, next) {
    res.render('iot');
});

module.exports = router;
