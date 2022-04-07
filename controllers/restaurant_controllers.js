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