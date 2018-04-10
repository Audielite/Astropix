var express = require('express');
var router = express.Router();
var apodService = require('../services/apod');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('fetchpicture');
});

router.get('/fetchpicture', function(req, res, next){

  apodService(function(err, apod_data){
    if (err) {
      res.reder('apod_error', {message: err.message, title: 'Error' });
    }else {
      res.render('index', {apod: apod_data, title:`Apod for ${apod_data.date}`});
    }

  }, req.query.picturetype);

});


router.get('/fetchpicture', function(req, res,next){
  if (req.query.picturetype === 'random'){
    res.send('todo: get random picture');
  }
  else{
    res.send('todo: get today\'s picture');
  }
});

module.exports = router;
