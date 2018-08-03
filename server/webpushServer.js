const webpush = require('web-push');
const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());


// Express setup
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

function saveRegistrationDetails(endpoint, key, authSecret) {
  // Save the users details in a DB
}

console.log(webpush.generateVAPIDKeys())

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  'BJZWuHMx8wVbUa-YxUGsDCRc2iB2i5TvRN4QYXqVCk0lQWxdqaX0iY1MFX-Ze97TizsE8s6NNlEZtZC2GxoiNzo',
  'cC3Trh3r6fsWKrnJybaZoGSHx_Z3xxcg8vltghaoZaQ'
);

// Home page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Article page
app.get('/article', function (req, res) {
  res.sendFile(path.join(__dirname + '/article.html'));
});
// Register the user
app.post('/register', function (req, res) {

  var endpoint = req.body.endpoint;
  var authSecret = req.body.authSecret;
  var key = req.body.key;

  // Store the users registration details
  saveRegistrationDetails(endpoint, key, authSecret);

  const pushSubscription = {
    endpoint: req.body.endpoint,
    keys: {
      auth: authSecret,
      p256dh: key
    }
  };

  var body = 'Thank you for registering';
  var iconUrl = 'https://raw.githubusercontent.com/deanhume/progressive-web-apps-book/master/chapter-6/push-notifications/public/images/homescreen.png';

  webpush.sendNotification(pushSubscription,
    JSON.stringify({
      title : 'Gracias!',
      icon: 'https://pablomagaz.com/assets/images/icons/logo512.png',
      vibrate : [ 100 ],
      data: { url: data.url }
    }))
    .then(result => res.sendStatus(201))
    .catch(err => console.log(err))

})

// The server
app.listen(3111, function () {
  console.log('Example app listening on port 3111!')
});