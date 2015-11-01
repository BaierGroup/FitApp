var express = require('express');
var OAuth = require('oauth');
var url = require('url');
var router = express.Router();

var authorization_uri;
var oauth2 = new OAuth.OAuth2(
    "0000000048174F9E",
    "gi6j1N9FcgT3YACQHpUcQE1280rKuu9Y",
    "https://login.live.com/",
    "",
    "",
    null
);
var queryCode;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
    var url_parts = url.parse(req.url, true);
    queryCode = url_parts.query.code;
    // console.log(queryCode);
    if(queryCode != null) {
        oauth2.getOAuthAccessToken(
            queryCode,
            {
                client_id: '0000000048174F9E',
                redirect_uri: "http://localhost:3000/",
                client_secret: "gi6j1N9FcgT3YACQHpUcQE1280rKuu9Y",
                code: queryCode,
                grant_type: 'authorization_code'
            },
            function(e, access_token, refresh_token, results) {
                console.log('access_token:  '+ access_token);
            });
    }

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
router.get('/index-rtl', function(req, res, next) {
  res.render('index-rtl');

});
router.get('/index', function(req, res, next) {
  res.render('index');

});

router.get('/auth', function(req, res, next) {
  // oauth2 = new OAuth.OAuth2(
  //     "0000000048174F9E",
  //     "gi6j1N9FcgT3YACQHpUcQE1280rKuu9Y",
  //     "https://login.live.com/oauth20_authorize.srf",
  //     "",
  //     "",
  //     null
  // );
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

router.get('/callback', function(req, res, next) {
    //var code = req.query.code;
    //oauth2.getOAuthAccessToken(
    //    code,
    //    {
    //        client_id: '0000000048174F9E',
    //        redirect_uri: "http://localhost:3000/access",
    //        client_secret: "gi6j1N9FcgT3YACQHpUcQE1280rKuu9Y",
    //        code: code,
    //        grant_type: 'authorization_code'
    //    },
    //    function(e, access_token, refresh_token, results) {
    //        console.log(access_token);
    //    });
});

router.get('/access', function(req, res, next) {
    console.log("test access");
});

module.exports = router;
