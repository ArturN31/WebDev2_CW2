//import db model
const lunchDAO = require('../models/lunch_model');
const lunch_db = new lunchDAO();
lunch_db.init(); //initialise lunch table

const dinnerDAO = require('../models/dinner_model');
const dinner_db = new dinnerDAO();
dinner_db.init(); //initialise dinner table

//MAIN CONTROLLERS
exports.homepage = function(req, res) {
    res.render('homepage', {
        homepage: 'class="nav-link lead active"', //variable for setting navbar active class when rendering template so that the current page is highlighted on navbar
        user: req.cookies.jwt
    });
}

exports.menu = function(req, res) {
    res.render('menu', {
        menu: 'class="nav-link lead active"',
        user: req.cookies.jwt
    });
}

exports.lunch_menu = function(req, res) {
    res.render('lunch_menu/lunch_menu', {
        menu: 'class="nav-link lead active"',
        user: req.cookies.jwt
    });
}

exports.lunch_menu_specials = function(req, res) {
    lunch_db.getLunchSpecials() //return Lunch specials
        .then((specials) => {
            res.render('lunch_menu/lunch_menu_specials', {
                menu: 'class="nav-link lead active"',
                'lunch_specials': specials,
                user: req.cookies.jwt
            });
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
                'sandwiches': sandwiches,
                user: req.cookies.jwt
            });
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
                'salads': salads,
                user: req.cookies.jwt
            });
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
                'beverages': beverages,
                user: req.cookies.jwt
            });
        })
        .catch((err) => {
        console.log('promise rejected - beverages entries not displayed', err);
        })
}

exports.dinner_menu = function(req, res) {
    res.render('dinner_menu/dinner_menu', {
        menu: 'class="nav-link lead active"',
        user: req.cookies.jwt
    });
}

exports.dinner_menu_appetizers = function(req, res) {
    dinner_db.getAppetizers() //return Appetizers
        .then((appetizers) => {
            res.render('dinner_menu/dinner_menu_appetizers', {
                menu: 'class="nav-link lead active"',
                'appetizers': appetizers,
                user: req.cookies.jwt
            });
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
                'sides': sides,
                user: req.cookies.jwt
            });
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
                'main_course': main_course,
                user: req.cookies.jwt
            });
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
                'desserts': desserts,
                user: req.cookies.jwt
            });
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
                'beverages': beverages,
                user: req.cookies.jwt
            });
        })
        .catch((err) => {
        console.log('promise rejected - beverages entries not displayed', err);
        })
}

exports.about_us = function(req, res) {
    res.render('about_us', {
        about_us: 'class="nav-link lead active"',
        user: req.cookies.jwt
    });
}
//EOF MAIN CONTROLLERS

//STAFF CONTROLLERS
    //LOGIN,LOGOUT
    exports.staff_login = function(req, res) {
        res.render('staff/staff_login', {
            user: req.cookies.jwt
        });
    }

    exports.handle_login = function(req, res) {
        res.redirect('/');
    }

    exports.logout = function(req, res) {
        res
            .clearCookie('jwt')
            .status(200)
            .redirect('/');
    }
    //EOF LOGIN,LOGOUT

    //NEW DISH
    exports.staff_new_dish = function(req, res) {
        res.render('staff/staff_new_dish', {
            add_new_dish: 'class="nav-link lead active"',
            user: req.cookies.jwt
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
    //EOF NEW DISH

    //REMOVE DISH
    exports.staff_edit_menu_remove = function(req, res) {
        res.render('staff/staff_edit_menu_remove', {
            remove_dish: 'class="nav-link lead active"',
            user: req.cookies.jwt
        });
    }

        //LUNCH
        exports.staff_lunch_menu_remove = function(req, res) {
            lunch_db.getAllEntries() //return all entries
                .then((lunch_menu) => {
                    res.render('staff/staff_lunch_menu_remove', {
                        'lunch_menu': lunch_menu,
                        user: req.cookies.jwt
                    });
                })
                .catch((err) => {
                console.log('promise rejected - all entries not displayed', err);
                })
        }

        exports.staff_post_lunch_menu_remove = function(req, res) {
            lunch_db.removeEntry(req.body.dish_name);
            res.redirect('staff_lunch_menu_remove');
        }
        //EOF LUNCH

        //DINNER
        exports.staff_dinner_menu_remove = function(req, res) {
            dinner_db.getAllEntries() //return all entries
                .then((dinner_menu) => {
                    res.render('staff/staff_dinner_menu_remove', {
                        'dinner_menu': dinner_menu,
                        user: req.cookies.jwt
                    });
                })
                .catch((err) => {
                console.log('promise rejected - all entries not displayed', err);
                })
        }

        exports.staff_post_dinner_menu_remove = function(req, res) {
            dinner_db.removeEntry(req.body.dish_name);
            res.redirect('staff_dinner_menu_remove');
        }
        //EOF DINNER
    //EOF REMOVE DISH

    //UPDATE DISH
    exports.staff_edit_menu_update = function(req, res) {
        res.render('staff/staff_edit_menu_update', {
            update_menu: 'class="nav-link lead active"',
            user: req.cookies.jwt
        });
    }

        //LUNCH
        exports.staff_lunch_menu_edit = function(req, res) {
            lunch_db.getAllEntries() //return all entries
                .then((lunch_menu) => {
                    res.render('staff/staff_lunch_menu_edit', {
                        'lunch_menu': lunch_menu,
                        user: req.cookies.jwt
                    });
                })
                .catch((err) => {
                console.log('promise rejected - all entries not displayed', err);
                })
        }

        exports.staff_post_lunch_menu_edit = function(req, res) {
            lunch_db.findDish(req.body.dish_name) //return dish
                .then((lunch_menu) => {
                    res.render('staff/staff_edit_lunch_dish', {
                        'lunch_menu': lunch_menu,
                        user: req.cookies.jwt
                    });
                })
                .catch((err) => {
                console.log('promise rejected - entry not displayed', err);
                })
        }

        exports.staff_update_lunch_dish = function(req, res) {
            lunch_db.updateDish(req.body.dish_name, req.body.dish_description, req.body.dish_ingredients, req.body.dish_allergens, req.body.dish_price, req.body.radios_available);
            res.redirect('/staff_lunch_menu_edit');
        }
        //EOF LUNCH

        //DINNER
        exports.staff_dinner_menu_edit = function(req, res) {
            dinner_db.getAllEntries() //return all entries
                .then((dinner_menu) => {
                    res.render('staff/staff_dinner_menu_edit', {
                        'dinner_menu': dinner_menu,
                        user: req.cookies.jwt
                    });
                })
                .catch((err) => {
                console.log('promise rejected - all entries not displayed', err);
                })
        }

        exports.staff_post_dinner_menu_edit = function(req, res) {
            dinner_db.findDish(req.body.dish_name) //return dish
                .then((dinner_menu) => {
                    res.render('staff/staff_edit_dinner_dish', {
                        'dinner_menu': dinner_menu,
                        user: req.cookies.jwt
                    });
                })
                .catch((err) => {
                console.log('promise rejected - entry not displayed', err);
                })
        }

        exports.staff_update_dinner_dish = function(req, res) {
            dinner_db.updateDish(req.body.dish_name, req.body.dish_description, req.body.dish_ingredients, req.body.dish_allergens, req.body.dish_price, req.body.radios_available);
            res.redirect('/staff_dinner_menu_edit');
        }
        //EOF DINNER
    //EOF UPDATE DISH
//EOF STAFF CONTROLLERS