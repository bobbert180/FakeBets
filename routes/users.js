var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Only send one response per request
  res.render('users', { title: 'Users', users: ['Alice', 'Bob', 'Charlie'] });
});

module.exports = router;
