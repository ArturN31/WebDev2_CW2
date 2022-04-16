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
            dish_alergens: 'N/A',
            dish_category: 'Mains',
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
            dish_alergens: 'N/A',
            dish_category: 'Mains',
            dish_price: 4.50,
            dish_available: 'Yes'
        });
        //for later debugging
        console.log('db entry beans on toast inserted');
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
}

module.exports = lunch_menu;