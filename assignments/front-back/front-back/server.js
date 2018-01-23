const express = require('express');
const app = express();
const PORT = 8000;
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const getUserList = require('./get-user-list');

app.use(bodyParser.json());
app.use(express.static('build'));

app.post('/user-list', (req, res) => {
  console.log(req.body);
  getUserList(req.body.token)
  .then( info => {res.send( JSON.stringify( info.users ) ); console.log(info);} )
  .then( r => r.ok ? r.json() : r.json().then( j => Promise.reject(j) ) )
  .then( j => { console.log(j); return j } )
  .catch( e => console.warn(e) )
});

app.listen(PORT, function() { console.log(`
Webserver running on port ${PORT}
You can go to http://localhost:${PORT}/
`); });