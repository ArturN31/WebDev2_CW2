const express = require('express'); //import express
const router = express.Router(); //instance of the router class
const controller = require('../controllers/restaurant_controllers.js'); //import controller

router.get("/", controller.homepage);
router.get("/menu", controller.menu);
router.get("/about_us", controller.about_us);
router.get("/staff_login", controller.staff_login);
router.get("/staff_screen", controller.staff_screen);
router.get("/staff_new_dish", controller.staff_new_dish);
router.get("/staff_edit_menu", controller.staff_edit_menu);
router.get("/staff_edit_dish", controller.staff_edit_dish);

module.exports = router; 