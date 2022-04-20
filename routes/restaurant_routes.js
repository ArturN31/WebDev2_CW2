const express = require('express'); //import express
const router = express.Router(); //instance of the router class
const controller = require('../controllers/restaurant_controllers.js'); //import controller

router.get('/', controller.homepage);
router.get('/menu', controller.menu);
router.get('/lunch_menu', controller.lunch_menu);
router.get('/lunch_menu/lunch_specials', controller.lunch_menu_specials);
router.get('/lunch_menu/lunch_sandwiches', controller.lunch_menu_sandwiches);
router.get('/lunch_menu/lunch_salads', controller.lunch_menu_salads);
router.get('/lunch_menu/lunch_beverages', controller.lunch_menu_beverages);
router.get('/dinner_menu', controller.dinner_menu);
router.get('/dinner_menu/dinner_appetizers', controller.dinner_menu_appetizers);
router.get('/dinner_menu/dinner_sides', controller.dinner_menu_sides);
router.get('/dinner_menu/dinner_main_course', controller.dinner_menu_main_course);
router.get('/dinner_menu/dinner_desserts', controller.dinner_menu_desserts);
router.get('/dinner_menu/dinner_beverages', controller.dinner_menu_beverages);
router.get('/about_us', controller.about_us);
router.get('/staff_login', controller.staff_login);
router.get('/staff_new_dish', controller.staff_new_dish);
router.get('/staff_edit_menu', controller.staff_edit_menu);
router.get('/staff_edit_dish', controller.staff_edit_dish);

router.post('/staff_new_dish', controller.staff_post_new_dish);

module.exports = router;