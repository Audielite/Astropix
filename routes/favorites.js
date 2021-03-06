var express = require('express');
var router = express.Router();

/* GET favorites page */
router.get('/', function(req, res, next){
    res.render('favorites', {favorites: req.session.favorites });
});

/* POST to add a new favorite to user's favorites */
router.post('/add', function(req, res, next){

    // if a favorites array does not exist in this session, create it
    if (!req.session.favorites) {
        req.session.favorites = [];
    }
    console.log(req.session.favorites);

    // is this image already a favorite? filter the favorites array for images with this date
    var favorite_on_date = req.session.favorites.filter(function(fav) {
        return fav.date == req.body.date
    });

    // if no favorite found with this date, then add to the sessions favorites array
    if (favorite_on_date.length == 0) {
        req.session.favorites.push(req.body);
    }

    // redirect to the favorites page
    res.redirect('/favorites');

});


router.post('/deleteAll', function(req, res, next){

    //delete all saved favorites and display none
    req.session.favorites = [];

    //redirect to the home page
    res.redirect('/');

});


module.exports = router;
