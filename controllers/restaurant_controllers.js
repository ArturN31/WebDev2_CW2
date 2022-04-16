//import db model
const lunchDAO = require('../models/lunch_model');
const lunch_db = new lunchDAO();
lunch_db.init(); //initialise lunch table

const dinnerDAO = require('../models/dinner_model');
const lunch_menu = require('../models/lunch_model');
const dinner_db = new dinnerDAO();
dinner_db.init(); //initialise table

exports.homepage = function(req, res) {
    res.render('homepage', {
        homepage: 'class="nav-link lead active"', //variable for setting navbar active class when rendering template so that the current page is highlighted on navbar
    });
}

exports.menu = function(req, res) {
    res.render('menu', {
        menu: 'class="nav-link lead active"',
    });
}

exports.lunch_menu = function(req, res) {
    lunch_db.getAllEntries() //return entries
        .then((list) => {
                res.render('lunch_menu', {
                    menu: 'class="nav-link lead active"',
                    'lunch_menu_entries': list
                });
                console.log('promise resolved');
            })
            .catch((err) => {
            console.log('promise rejected', err);
            })
}

exports.dinner_menu = function(req, res) {
    dinner_db.getAllEntries() //return entries
        .then((list) => {
                res.render('dinner_menu', {
                    menu: 'class="nav-link lead active"',
                    'dinner_menu_entries': list
                });
                console.log('promise resolved');
            })
            .catch((err) => {
            console.log('promise rejected', err);
            })
}

exports.about_us = function(req, res) {
    res.render('about_us', {
        about_us: 'class="nav-link lead active"',
    });
}

exports.staff_login = function(req, res) {
    res.render('staff_login');
}

exports.staff_screen = function(req, res) {
    res.render('staff_screen');
}

exports.staff_new_dish = function(req, res) {
    res.render('staff_new_dish');
}

exports.staff_edit_menu = function(req, res) {
    res.render('staff_edit_menu');
}

exports.staff_edit_dish = function(req, res) {
    res.render('staff_edit_dish');
}