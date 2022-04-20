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
        // Using a unique constraint with the dish_name field
        this.db.ensureIndex({ fieldName: 'dish_name', unique: true }, function (err) {
        });
        this.db.insert({
            dish_name: 'Beans on  toast',
            dish_description: 'Beans poured on a toasted white bread',
            dish_ingredients: 'Beans in tomatoe sauce, white bread, salt, pepper.',
            dish_allergens: 'N/A',
            dish_category: 'lunch specials',
            dish_price: 4.50,
            dish_available: 'yes'
        });
        //for later debugging
        console.log('db entry beans on toast inserted');

        this.db.insert({
            dish_name: 'Chicken wrap',
            dish_description: 'Cubed chicken wrapped in a tortilla with fresh veggies',
            dish_ingredients: 'Chicken, tortilla, tomatoe, lettuce, cucumber, onion.',
            dish_allergens: 'N/A',
            dish_category: 'sandwiches',
            dish_price: 4.65,
            dish_available: 'yes'
        });
        //for later debugging
        console.log('db entry chicken wrap inserted');

        this.db.insert({
            dish_name: 'Caesar salad',
            dish_description: 'Romaine lettuce with croutons, chicken cubes, and dressing.',
            dish_ingredients: 'Romaine lettuce, Caesar dressing, chicken, croutons.',
            dish_allergens: 'N/A',
            dish_category: 'salads',
            dish_price: 5.25,
            dish_available: 'yes'
        });
        //for later debugging
        console.log('db entry caesar salad inserted');

        this.db.insert({
            dish_name: 'Tea',
            dish_description: 'Black tea served with a slice of lemon and a few sugar cubes on the side.',
            dish_ingredients: 'Tea, lemon, sugar.',
            dish_allergens: 'N/A',
            dish_category: 'beverages',
            dish_price: 1.75,
            dish_available: 'yes'
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
            this.db.find({dish_category: 'lunch specials', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
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
            this.db.find({dish_category: 'sandwiches', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
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
            this.db.find({dish_category: 'salads', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
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
            this.db.find({dish_category: 'beverages', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('function getBeverages returns: ', entries);
                }
            })
        })
    }

    addEntry(dish_name, dish_description, dish_ingredients, dish_allergens, dish_category, dish_price, dish_available) {
        var entry = {
            dish_name: dish_name,
            dish_description: dish_description,
            dish_ingredients: dish_ingredients,
            dish_allergens: dish_allergens,
            dish_category: dish_category,
            dish_price: dish_price,
            dish_available: dish_available
        }
    
        this.db.insert(entry, function(err, doc) {
            if (err) {console.log('Error inserting document', dish_name);}
            else {console.log('document inserted into the database', doc);}
        })
    }
}

module.exports = lunch_menu;