var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();
var router = require('./controllers/burgers_controller.js');

app.use(express.static(process.cwd() + '/public'));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', router);

var port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, function(){
  console.log('The app is definitely listening on port ' + port);
});
