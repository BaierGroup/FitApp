var express = require('express');
var OAuth = require('oauth');
var router = express.Router();

var authorization_uri;
var oauth2;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/blank-page', function(req, res, next) {
  res.render('blank-page');

});
router.get('/bootstrap-elements', function(req, res, next) {
  res.render('bootstrap-elements');

});
router.get('/bootstrap-grid', function(req, res, next) {
  res.render('bootstrap-grid');

});
router.get('/charts', function(req, res, next) {
  res.render('charts');

});
router.get('/index-rtl', function(req, res, next) {
  res.render('index-rtl');

});
router.get('/index', function(req, res, next) {
  res.render('index');

});

router.get('/auth', function(req, res, next) {
  oauth2 = new OAuth.OAuth2(
      "0000000048174F9E",
      "gi6j1N9FcgT3YACQHpUcQE1280rKuu9Y",
      "https://login.live.com/oauth20_authorize.srf",
      "",
      "",
      null
  );
    console.log('authr');

   authorization_uri = oauth2.getAuthorizeUrl({
       client_id: '0000000048174F9E',
       scope: 'mshealth.ReadDevices',
       response_type: 'code',
       redirect_uri: 'http://localhost:3000/'
    });
    console.log(authorization_uri);

    res.redirect(authorization_uri);
});



module.exports = router;
