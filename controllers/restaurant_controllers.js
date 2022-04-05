exports.homepage = function(req, res) {
    res.render('homepage');
}

exports.menu = function(req, res) {
    res.render('menu');
}

exports.about_us = function(req, res) {
    res.render('about_us');
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