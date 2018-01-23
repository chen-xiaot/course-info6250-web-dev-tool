const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const reporter = require('./formReporter').reporter;
const parseRequest = require('./formReporter').parseRequest;
const failText = require('./formReporter').failText;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

const manageForm =  request => {
  const report = parseRequest(request);
  const summary = reporter(report);
  console.log( summary.length ? summary.join('\n') : 'Request is OK!' );
};

const failRequest = (response, text) => {
  response.status(200).send(text);
};
app.get('*', (request, response, next) => {
  switch(request.url) {
    case '/':
    case '/index.html':
    case '/style.css':
      return next();
    case '/complete.html':
      return failRequest(response, failText.GET);
    default:
      if(request.url.includes('.css') ){
        return failRequest(respone, failText.CSS);
      }
      return failRequest(response, failText.TARGET);
  }
});

app.post('*', (request, response, next) => {
  switch(request.url) {
    case '/complete.html':
      manageForm(request);
      request.method='GET';
      return next();
    case '/':
    case '/index.html':
      return failRequest(response, failText.POST);
    default:
      return failRequest(response, failText.TARGET);
  }
});

app.use(express.static('static'));

    // failRequest(response, failText.GET) );
// app.get('/', (request, response, next) => { request.method = 'GET'; next(); });
// app.post('/complete.html', (request, response, next) => manageForm(request, response, next) );

app.listen(port, function() { console.log(`
Webserver running on port ${port}
You can go to http://localhost:${port}/
`); });


