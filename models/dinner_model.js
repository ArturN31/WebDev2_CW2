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
        this.db.insert({
            _id: 1,
            dish_name: 'Fish and chips',
            dish_description: 'Deep fried battered cod along with chips.',
            dish_ingredients: 'Batter, cod, chips, salt, pepper',
            dish_alergens: 'N/A',
            dish_category: 'Mains',
            dish_price: 10.75,
            dish_available: 'Yes'
        });
        //for later debugging
        console.log('db entry fish and chips inserted');

        this.db.insert({
            _id: 2,
            dish_name: 'Steak and roasted potatoes',
            dish_description: 'Pan fried steak with crispy roasted in duck fat potatoes.',
            dish_ingredients: 'Sirloin steak, potatoes, salt, pepper, garlic granules, thyme, duck fat.',
            dish_alergens: 'N/A',
            dish_category: 'Mains',
            dish_price: 18.45,
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

module.exports = dinner_menu;