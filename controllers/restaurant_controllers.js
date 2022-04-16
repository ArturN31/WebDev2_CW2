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
    res.render('lunch_menu', {
        menu: 'class="nav-link lead active"',
    });
}

exports.lunch_menu_specials = function(req, res) {
    lunch_db.getLunchSpecials() //return Lunch specials
        .then((specials) => {
            res.render('lunch_menu_specials', {
                menu: 'class="nav-link lead active"',
                'lunch_specials': specials
            });
            console.log('promise resolved - lunch_menu entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - lunch_menu entries not displayed', err);
        })
}

exports.lunch_menu_sandwiches = function(req, res) {
    lunch_db.getSandwiches() //return sandwiches
        .then((sandwiches) => {
            res.render('lunch_menu_sandwiches', {
                menu: 'class="nav-link lead active"',
                'sandwiches': sandwiches
            });
            console.log('promise resolved - sandwiches entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - sandwiches entries not displayed', err);
        })
}

exports.lunch_menu_salads = function(req, res) {
    lunch_db.getSalads() //return salads
        .then((salads) => {
            res.render('lunch_menu_salads', {
                menu: 'class="nav-link lead active"',
                'salads': salads
            });
            console.log('promise resolved - salads entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - salads entries not displayed', err);
        })
}

exports.lunch_menu_beverages = function(req, res) {
    lunch_db.getBeverages() //return beverages
        .then((beverages) => {
            res.render('lunch_menu_beverages', {
                menu: 'class="nav-link lead active"',
                'beverages': beverages
            });
            console.log('promise resolved - beverages entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - beverages entries not displayed', err);
        })
}

exports.dinner_menu = function(req, res) {
    dinner_db.getAppetizers() //return Appetizers
    dinner_db.getSides() //return Sides
    dinner_db.getMainCourse() //return Main Course
    dinner_db.getDesserts() //return Desserts
    dinner_db.getBeverages() //return Beverages
        .then((list) => {
                res.render('dinner_menu', {
                    menu: 'class="nav-link lead active"',
                    'appetizers': list,
                    'sides': list,
                    'main_course': list,
                    'desserts': list,
                    'beverages': list
                });
                console.log('promise resolved - dinner_menu entries displayed');
            })
            .catch((err) => {
            console.log('promise rejected - dinner_menu entries not displayed', err);
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