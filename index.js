//vars
const express = require('express'); //import express
const app = express(); //use express to create an application

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); //bootstrap css
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); //bootstrap css
app.use(express.urlencoded({ extended: false })); //body parser

//path setup
const path = require('path');
const public = path.join(__dirname,'public');
app.use(express.static(public));

//template engine
const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

//routes
const router = require('./routes/restaurant_routes'); //import router
app.use('/', router); //route to root - homepage


//error 404 handler
app.use(function(req, res) {
    res.status(404);
    res.sendFile(path.join(public, 'error_404.html'));
})

//listen on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})
