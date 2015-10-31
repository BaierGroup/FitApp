var express = require('express');
var OAuth = require('oauth');
var router = express.Router();

var authorization_uri;
var oauth2;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.get('/auth', function(req, res, next) {
  var oauth2 = new OAuth.OAuth2(
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
  //oauth2.getOAuthAccessToken(
  //    req.query.code,
  //    {
  //      //"grant_type": 'authorization_code'
  //    },
  //  function(e, access_token, refresh_token, results) {
  //    console.log(access_token);
  //  });
});



module.exports = router;
