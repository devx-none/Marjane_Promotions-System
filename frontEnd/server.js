const express = require('express');
const app = express();
const newRouter = require('./src/routes/router');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Server started on port ${port}`);
})

app.use(bodyParser.urlencoded({ extended: true }))
//static files
app.use(express.static("public"));
app.use('/styles',express.static(__dirname+'public/styles'))
app.use('/img',express.static(__dirname+'public/img'))
app.use('/vendor',express.static(__dirname+'public/vendor'))

//view pages
app.set('views','./src/views');
app.set('view engine','ejs');


//Routes
app.use('/',newRouter);





