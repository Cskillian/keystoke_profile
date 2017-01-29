var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.statis(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
