const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/items', function (req, res) {
  console.log('hello')

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
