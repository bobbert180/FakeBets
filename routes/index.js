var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET left sidebar page. */
router.get('/left-sidebar', function(req, res, next) {
  res.render('left-sidebar', { title: 'Left Sidebar' });
});

/* GET right sidebar page. */
router.get('/right-sidebar', function(req, res, next) {
  res.render('rightSidebar', { title: 'Right Sidebar' });
});

/* GET no sidebar page. */
router.get('/no-sidebar', function(req, res, next) {
  res.render('noSidebar', { title: 'No Sidebar' });
});

module.exports = router;
