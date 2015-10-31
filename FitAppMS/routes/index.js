var express = require('express');
var OAuth = require('oauth');
var router = express.Router();

var authorization_uri;
var oauth2;
oauth2 = require('simple-oauth2')({
    clientID: "0000000048174F9E",
    clientSecret: "gi6j1N9FcgT3YACQHpUcQE1280rKuu9Y",
    site: 'https://login.live.com/oauth20_authorize.srf',
    tokenPath: '/oauth/access_token',
    
});

authorization_uri = oauth2.authCode.authorizeURL({
    redirect_uri: 'http://localhost:3000/callback',
    scope: 'mshealth.ReadDevices'
    //state: '3(#0/!~'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

//router.get('/auth', function(req, res, next) {
//  var oauth2 = new OAuth.OAuth2(
//      "0000000048174F9E",
//      "gi6j1N9FcgT3YACQHpUcQE1280rKuu9Y",
//      "https://login.live.com/oauth20_authorize.srf",
//      "",
//      null,
//      null
//  );
//    console.log('authr');
//
//
//  oauth2.getOAuthAccessToken(
//      req.query.code,
//      {
//        //"grant_type": 'authorization_code'
//      },
//    function(e, access_token, refresh_token, results) {
//      console.log(access_token);
//    });
//});

//router.get('/auth', function(req, res) {
//    console.log(authorization_uri);
//    res.redirect(authorization_uri);
//});
//
//router.get('/callback', function (req, res) {
//    var code = req.query.code;
//    console.log('/callback');
//    oauth2.authCode.getToken({
//        code: code,
//        redirect_uri: 'http://localhost:3000/callback'
//    }, saveToken);
//
//    function saveToken(error, result) {
//        if (error) { console.log('Access Token Error', error.message); }
//        token = oauth2.accessToken.create(result);
//    }
//});


module.exports = router;
