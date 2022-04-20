const nedb = require('nedb'); //import nedb

class dinner_menu {
    //db constructor
    constructor(dbFilePath = 'db/dinner_menu.db') {
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
            dish_name: 'Chicken Strips',
            dish_description: 'Breaded and deepfried chicken strips served with dip of choice.',
            dish_ingredients: 'Chicken breast, batter, salt, pepper, dip of choice',
            dish_allergens: 'N/A',
            dish_category: 'appetizers',
            dish_price: 4.75,
            dish_available: 'yes'
        });
        //for later debugging
        console.log('db entry chicken strips inserted');

        this.db.insert({
            dish_name: 'Chips and cheese',
            dish_description: 'Deepfried chips with mozarella cheese sprinkled on top.',
            dish_ingredients: 'Potatoes, mozarella cheese, salt.',
            dish_allergens: 'N/A',
            dish_category: 'sides',
            dish_price: 3.50,
            dish_available: 'yes'
        });
        //for later debugging
        console.log('db entry chips and cheese inserted');

        this.db.insert({
            dish_name: 'Steak and roasted potatoes',
            dish_description: 'Pan fried steak with crispy roasted in duck fat potatoes.',
            dish_ingredients: 'Sirloin steak, potatoes, salt, pepper, garlic granules, thyme, duck fat.',
            dish_allergens: 'N/A',
            dish_category: 'main course',
            dish_price: 18.45,
            dish_available: 'yes'
        });
        //for later debugging
        console.log('db entry steak and roasted potatoes inserted');

        this.db.insert({
            dish_name: 'Cheesecake',
            dish_description: 'Cheesecake with chocolate base.',
            dish_ingredients: 'Chocolate biscuits, butter, soft cheese, double cream, icing sugar.',
            dish_allergens: 'N/A',
            dish_category: 'desserts',
            dish_price: 4.00,
            dish_available: 'yes'
        });
        //for later debugging
        console.log('db entry cheesecake inserted');

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

    getAppetizers(){
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'appetizers', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('function getAppetizers returns: ', entries);
                }
            })
        })
    }

    getSides() {
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'sides', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('function getSides returns: ', entries);
                }
            })
        })
    }

    getMainCourse() {
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'main course', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('function getMainCourse returns: ', entries);
                }
            })
        })
    }

    getDesserts(){
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'desserts', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('function getDesserts returns: ', entries);
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

module.exports = dinner_menu;