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
        
        // template
        // this.db.insert({
        //     dish_name: '',
        //     dish_description: '',
        //     dish_ingredients: '',
        //     dish_allergens: '',
        //     dish_category: '',
        //     dish_price: 0.00,
        //     dish_available: 'yes'
        // });

        //LUNCH SPECIALS
        this.db.insert({
            dish_name: 'Bacon and sour cream jacket potato',
            dish_description: 'Classic jacket potato topped with soured cream, cheddar, crispy chopped bacon rashers, and fresh chives',
            dish_ingredients: 'Potato, olive oil, soured cream, cheddar, bacon rashers, chives',
            dish_allergens: 'Milk',
            dish_category: 'lunch specials',
            dish_price: 5.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Lentil soup',
            dish_description: 'Filling veggie soup made on a ham stock.',
            dish_ingredients: 'Ham stock, lentils, carrots, leeks, parsley to serve',
            dish_allergens: 'N/A',
            dish_category: 'lunch specials',
            dish_price: 2.00,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Lentil soup (vegan)',
            dish_description: 'Filling veggie soup that is suitable for vegans',
            dish_ingredients: 'Vegetable stock, lentils, carrots, leeks, parsley to serve',
            dish_allergens: 'N/A',
            dish_category: 'lunch specials',
            dish_price: 2.00,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Full English breakfast',
            dish_description: 'Classical fry-up of favourite breakfast products',
            dish_ingredients: 'Sausages, bacon, black pudding, fried eggs, buttered toast, tomatoes, mushrooms, baked beans',
            dish_allergens: 'Cereals containing gluten (barley, oats), Eggs, Milk',
            dish_category: 'lunch specials',
            dish_price: 12.50,
            dish_available: 'no'
        });
        //EOF LUNCH SPECIALS

        //SANDWICHES
        this.db.insert({
            dish_name: 'Bacon roll',
            dish_description: 'Pan fried bacon inside of a toasted buttered roll',
            dish_ingredients: 'Roll, bacon rashers, butter',
            dish_allergens: 'Cereals containing gluten (barley, oats), Milk',
            dish_category: 'sandwiches',
            dish_price: 2.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Tuna melt',
            dish_description: 'Grilled cheese sandwich with a tuna salad filling',
            dish_ingredients: 'Sourdough loaf or white bread, butter, cheddar, filling(tuna, mayonaise, dill pickles, red onion, mustard, salt, black pepper)',
            dish_allergens: 'Cereals containing gluten (barley, oats), Fish, Milk, Mustard',
            dish_category: 'sandwiches',
            dish_price: 3.25,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Ham and cheese toastie',
            dish_description: 'Grilled cheese sandwich with ham',
            dish_ingredients: 'Sourdough loaf or white bread, butter, ham, cheese',
            dish_allergens: 'Cereals containing gluten (barley, oats), Milk',
            dish_category: 'sandwiches',
            dish_price: 2.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Bagel with cream cheese and sundried tomatoes',
            dish_description: 'Cream cheese and sun-dried tomato spread on a bagel',
            dish_ingredients: 'Bagel, cream cheese, sundried tomatoes in oil',
            dish_allergens: 'Cereals containing gluten (barley, oats), Milk',
            dish_category: 'sandwiches',
            dish_price: 2.50,
            dish_available: 'no'
        });
        //EOF SANDWICHES

        //SALADS
        this.db.insert({
            dish_name: 'Caesar salad',
            dish_description: 'Romaine lettuce with croutons, chicken cubes, and dressing',
            dish_ingredients: 'Romaine lettuce, chicken, caesar dressing(lemon juice, anchovy paste, mustard, mayonnaise, parmesan cheese, salt, pepper), croutons',
            dish_allergens: 'Eggs, Fish, Mustard',
            dish_category: 'salads',
            dish_price: 4.25,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Greek Salad',
            dish_description: 'Fresh salad vegetables with feta cheese and a light dressing',
            dish_ingredients: 'Tomatoes, cucumbers, olives, feta cheese, onions, dressing(olive oil, salt, pepper, oregano)',
            dish_allergens: 'Milk',
            dish_category: 'salads',
            dish_price: 2.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Tuna salad',
            dish_description: 'Creamy and crispy comfort food classic',
            dish_ingredients: 'Tuna, mayonnaise, dill pickles, red onion, mustard, salt, black pepper',
            dish_allergens: 'Egg, Fish, Mustard',
            dish_category: 'salads',
            dish_price: 3.00,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Grilled lemon chicken salad',
            dish_description: 'Succulent and citrusy grilled chicken breast served with salad vegetables and dressed with raspberry vinegar',
            dish_ingredients: 'Chicken, lemon, tomatoes, cucumbers, romaine lettuce, raspberry vinegar',
            dish_allergens: 'N/A',
            dish_category: 'salads',
            dish_price: 3.50,
            dish_available: 'no'
        });
        //EOF SALADS

        //BEVERAGES
        this.db.insert({
            dish_name: 'Tea',
            dish_description: 'Black tea served with a slice of lemon and a few sugar cubes on the side',
            dish_ingredients: 'Tea, lemon, sugar',
            dish_allergens: 'N/A',
            dish_category: 'beverages',
            dish_price: 2.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Coffee',
            dish_description: 'Arabica coffee served with a few sugar cubes and cream or milk on the side',
            dish_ingredients: 'Arabica coffee beans, sugar, cream or milk',
            dish_allergens: 'N/A',
            dish_category: 'beverages',
            dish_price: 2.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Orange juice',
            dish_description: 'Orange juice served in a glass',
            dish_ingredients: 'Orange juice',
            dish_allergens: 'N/A',
            dish_category: 'beverages',
            dish_price: 1.75,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Apple juice',
            dish_description: 'Apple juice served in a glass',
            dish_ingredients: 'Apple juice',
            dish_allergens: 'N/A',
            dish_category: 'beverages',
            dish_price: 1.75,
            dish_available: 'no'
        });
        //EOF BEVERAGES
    }

    getAllEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({}).sort({dish_category: 1, dish_available: -1, dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                }
            })
        })
    }

    getLunchSpecials() {
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'lunch specials', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                }
            })
        })
    }

    getSandwiches() {
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'sandwiches', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                }
            })
        })
    }

    getSalads() {
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'salads', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
                }
            })
        })
    }

    getBeverages() {
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'beverages', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
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
        })
    }

    removeEntry(dish_name) {
        this.db.remove({ dish_name: dish_name }, {}, function (err, removed) {
            if (err) {console.log('Error removing document', dish_name);}
        });
    }

    findDish(dish_name) {
        return new Promise((resolve, reject) => {
            this.db.find({ dish_name: dish_name }, function (err, docs) {
                if(err){
                    reject(err);
                } else {
                    resolve(docs);
                }
            })
        })
    }

    updateDish(dish_name, dish_description, dish_ingredients, dish_allergens, dish_price, dish_available) {
        this.db.update({ dish_name: dish_name}, { $set: { dish_name: dish_name, dish_description: dish_description, dish_ingredients: dish_ingredients, dish_allergens: dish_allergens, dish_price: dish_price, dish_available: dish_available } }, {}, function (err, numReplaced) {
            if (err) {console.log('Error updating document', dish_name);}
        });
    }
}

module.exports = lunch_menu;