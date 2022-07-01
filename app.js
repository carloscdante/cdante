const express = require("express"),
      app     = express()
      bodyParser = require('body-parser')
      path    = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT || 3000, function(){
   console.log("The Server Has Started!");
});