// READ THIS FILE FOR UNDERSTANDING
// BUT DO NOT EDIT IT

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/redirect', (req, res) => {
  if(req.query.game === 'word-master') {
    res.redirect(301,'/game.html');
  } else {
    res.status(404);
    res.send('Wrong value for parameter game');
    res.end();
  }
});

app.use(express.static('public')); // Remember what this does?

app.listen(port, function() { console.log(`
Webserver running on port ${port}
You can go to http://localhost:${port}/
`); });


