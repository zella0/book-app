// setup express for easier navigation via HTTP requests
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

// setup ejs
app.set('view engine', 'ejs');

require("./config/routes.js")(app);

app.listen(port, function() {
  console.log('server is up on port ' + port)
})
