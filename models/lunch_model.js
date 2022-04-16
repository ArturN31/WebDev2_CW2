const nedb = require('nedb'); //import nedb

class lunch_menu {
    //db constructor
    constructor(dbFilePath = 'db/lunch_menu.db') {
    //constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
            console.log('DB is in in-memory mode');
        }
    }
    
    init() {
        this.db.insert({
            _id: 1,
            dish_name: 'Scrambled eggs',
            dish_description: 'Eggs scrambled on a pan.',
            dish_ingredients: 'Eggs, butter, salt, pepper.',
            dish_allergens: 'N/A',
            dish_category: 'Lunch specials',
            dish_price: 2.50,
            dish_available: 'Yes'
        });
        //for later debugging
        console.log('db entry scrambled eggs inserted');

        this.db.insert({
            _id: 2,
            dish_name: 'Beans on  toast',
            dish_description: 'Beans poured on a toasted white bread',
            dish_ingredients: 'Beans in tomatoe sauce, white bread, salt, pepper.',
            dish_allergens: 'N/A',
            dish_category: 'Lunch specials',
            dish_price: 4.50,
            dish_available: 'Yes'
        });
        //for later debugging
        console.log('db entry beans on toast inserted');

        this.db.insert({
            _id: 3,
            dish_name: 'Chicken wrap',
            dish_description: 'Cubed chicken wrapped in a tortilla with fresh veggies',
            dish_ingredients: 'Chicken, tortilla, tomatoe, lettuce, cucumber, onion.',
            dish_allergens: 'N/A',
            dish_category: 'Sandwiches',
            dish_price: 4.65,
            dish_available: 'Yes'
        });
        //for later debugging
        console.log('db entry chicken wrap inserted');

        this.db.insert({
            _id: 4,
            dish_name: 'Caesar salad',
            dish_description: 'Romaine lettuce with croutons, chicken cubes, and dressing.',
            dish_ingredients: 'Romaine lettuce, Caesar dressing, chicken, croutons.',
            dish_allergens: 'N/A',
            dish_category: 'Salads',
            dish_price: 5.25,
            dish_available: 'Yes'
        });
        //for later debugging
        console.log('db entry caesar salad inserted');

        this.db.insert({
            _id: 5,
            dish_name: 'Tea',
            dish_description: 'Black tea served with a slice of lemon and a few sugar cubes on the side.',
            dish_ingredients: 'Tea, lemon, sugar.',
            dish_allergens: 'N/A',
            dish_category: 'Beverages',
            dish_price: 1.75,
            dish_available: 'Yes'
        });
        //for later debugging
        console.log('db entry tea inserted');
    }

    getAllEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({}, function(err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(entries);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', entries);
                }
            })
        })
    }

    getLunchSpecials(){
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'Lunch specials'}, function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('function getLunchSpecials returns: ', entries);
                }
            })
        })
    }

    getSandwiches(){
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'Sandwiches'}, function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('function getSandwiches returns: ', entries);
                }
            })
        })
    }

    getSalads(){
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'Salads'}, function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('function getSalads returns: ', entries);
                }
            })
        })
    }

    getBeverages(){
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'Beverages'}, function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('function getBeverages returns: ', entries);
                }
            })
        })
    }
}

module.exports = lunch_menu;