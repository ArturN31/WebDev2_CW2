const bcrypt = require('bcrypt');
const staffDAO = require('../models/staff_model');
const staff_model = new staffDAO();
staff_model.init();
const jwt = require('jsonwebtoken');


exports.login = function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    staff_model.lookup(username, function (err, user) {
        //error
        if(err) {
            console.log('error looking up user' , err);
            return res.redirect('/staff_login');
        }
        //user does not exist
        if(!user) {
            console.log('user', username, 'not found');
            return res.redirect('/staff_login');
        }
        //compare password provided in form with stored password
        bcrypt.compare(password, user.password, function (err, result) {
            if(result) {
                //user exists and password is correct - setup jwt token
                let payload = {username: username};
                let access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
                res.cookie('jwt', access_token);

                next();
            } else {
                console.log('password not matching');
                res.redirect('/staff_login');
            }
        });
    });
};

exports.verify = function(req, res, next) {
    let access_token = req.cookies.jwt;
    //access token not existing
    if(!access_token) {
        return res.status(403).send();
    }
    let payload;
    //verify jwt token
    try {
        payload = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch(e) {
        //error occures
        res.status(401).send();
    }
}

