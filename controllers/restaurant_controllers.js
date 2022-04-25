//import db model
const lunchDAO = require('../models/lunch_model');
const lunch_db = new lunchDAO();
lunch_db.init(); //initialise lunch table

const dinnerDAO = require('../models/dinner_model');
const dinner_db = new dinnerDAO();
dinner_db.init(); //initialise dinner table

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
    res.render('lunch_menu/lunch_menu', {
        menu: 'class="nav-link lead active"',
    });
}

exports.lunch_menu_specials = function(req, res) {
    lunch_db.getLunchSpecials() //return Lunch specials
        .then((specials) => {
            res.render('lunch_menu/lunch_menu_specials', {
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
            res.render('lunch_menu/lunch_menu_sandwiches', {
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
            res.render('lunch_menu/lunch_menu_salads', {
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
            res.render('lunch_menu/lunch_menu_beverages', {
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
    res.render('dinner_menu/dinner_menu', {
        menu: 'class="nav-link lead active"',
    });
}

exports.dinner_menu_appetizers = function(req, res) {
    dinner_db.getAppetizers() //return Appetizers
        .then((appetizers) => {
            res.render('dinner_menu/dinner_menu_appetizers', {
                menu: 'class="nav-link lead active"',
                'appetizers': appetizers
            });
            console.log('promise resolved - appetizers entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - appetizers entries not displayed', err);
        })
}

exports.dinner_menu_sides = function(req, res) {
    dinner_db.getSides() //return Sides
        .then((sides) => {
            res.render('dinner_menu/dinner_menu_sides', {
                menu: 'class="nav-link lead active"',
                'sides': sides
            });
            console.log('promise resolved - sides entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - sides entries not displayed', err);
        })
}

exports.dinner_menu_main_course = function(req, res) {
    dinner_db.getMainCourse() //return Main Course
        .then((main_course) => {
            res.render('dinner_menu/dinner_menu_main_course', {
                menu: 'class="nav-link lead active"',
                'main_course': main_course
            });
            console.log('promise resolved - main_course entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - main_course entries not displayed', err);
        })
}

exports.dinner_menu_desserts = function(req, res) {
    dinner_db.getDesserts() //return Desserts
        .then((desserts) => {
            res.render('dinner_menu/dinner_menu_desserts', {
                menu: 'class="nav-link lead active"',
                'desserts': desserts
            });
            console.log('promise resolved - desserts entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - desserts entries not displayed', err);
        })
}

exports.dinner_menu_beverages = function(req, res) {
    dinner_db.getBeverages() //return Beverages
        .then((beverages) => {
            res.render('dinner_menu/dinner_menu_beverages', {
                menu: 'class="nav-link lead active"',
                'beverages': beverages
            });
            console.log('promise resolved - beverages entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - beverages entries not displayed', err);
        })
}

exports.about_us = function(req, res) {
    res.render('about_us', {
        about_us: 'class="nav-link lead active"',
    });
}

exports.staff_login = function(req, res) {
    res.render('staff/staff_login');
}

exports.staff_new_dish = function(req, res) {
    res.render('staff/staff_new_dish', {
        add_new_dish: 'class="nav-link lead active"'
    });
}

exports.staff_post_new_dish = function(req, res) {
    console.log('Processing staff_post_new_dish');
    if(req.body.menu == "lunch_menu") {
        lunch_db.addEntry(req.body.dish_name, req.body.dish_description, req.body.dish_ingredients, req.body.dish_allergens, req.body.ChoicesForMenus, req.body.dish_price, req.body.radios_available);
    }
    else if(req.body.menu == "dinner_menu") {
        dinner_db.addEntry(req.body.dish_name, req.body.dish_description, req.body.dish_ingredients, req.body.dish_allergens, req.body.ChoicesForMenus, req.body.dish_price, req.body.radios_available);
    }
    res.redirect('staff_new_dish');
}

exports.staff_edit_menu = function(req, res) {
    res.render('staff/staff_edit_menu', {
        update_menu: 'class="nav-link lead active"'
    });
}

exports.staff_lunch_menu_edit = function(req, res) {
    lunch_db.getAllEntries() //return all entries
        .then((lunch_menu) => {
            res.render('staff/staff_lunch_menu_edit', {
                'lunch_menu': lunch_menu
            });
            console.log('promise resolved - all entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - all entries not displayed', err);
        })
}
exports.staff_dinner_menu_edit = function(req, res) {
    dinner_db.getAllEntries() //return all entries
        .then((dinner_menu) => {
            res.render('staff/staff_dinner_menu_edit', {
                'dinner_menu': dinner_menu
            });
            console.log('promise resolved - all entries displayed');
        })
        .catch((err) => {
        console.log('promise rejected - all entries not displayed', err);
        })
}

exports.staff_edit_dish = function(req, res) {
    res.render('staff/staff_edit_dish');
}