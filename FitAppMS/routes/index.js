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
var accessToken;

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
router.get('/index-rtl', function(req, res, next) {
  res.render('index-rtl');

});
router.get('/index', function(req, res, next) {
  res.render('index');

});

router.get('/auth', function(req, res, next) {

    console.log('authr');

   authorization_uri = oauth2.getAuthorizeUrl({
       client_id: '0000000048174F9E',
       scope: 'mshealth.ReadDevices mshealth.ReadProfile mshealth.ReadActivityHistory mshealth.ReadActivityLocation',
       response_type: 'code',
       redirect_uri: 'http://localhost:3000/home'
    });
    console.log(authorization_uri);

    res.redirect(authorization_uri);



});

router.get('/home', function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    queryCode = url_parts.query.code;
    // console.log(queryCode);
    if(queryCode != null) {
        oauth2.getOAuthAccessToken(
            queryCode,
            {
                client_id: '0000000048174F9E',
                redirect_uri: "http://localhost:3000/home",
                client_secret: "gi6j1N9FcgT3YACQHpUcQE1280rKuu9Y",
                code: queryCode,
                grant_type: 'authorization_code'
            },
            function(e, access_token, refresh_token, results) {
                accessToken = access_token;
                  // console.log(request_arr[i]);
                  oauth2.get('https://api.microsofthealth.net/v1/me/Summaries/Daily?startTime=2015-10-30T16:04:49.8578590-07:00&endTime=2015-11-01T16:04:49.840-07:00', accessToken, function (e, result, response) {
                      var tmp_data = JSON.parse(result);
                      console.log(tmp_data);
                      var calorie = tmp_data.summaries[1].caloriesBurnedSummary.totalCalories;
                      console.log(calorie);
                      res.render('index1',tmp_data);
                      // result_arr.push(tmp_data);
                  });
        });
      }

    });



router.get('/access', function(req, res, next) {
    console.log("test access");
});

module.exports = router;
