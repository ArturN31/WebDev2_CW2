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

        //APPETIZERS
        this.db.insert({
            dish_name: 'Chicken Strips',
            dish_description: 'Breaded and deepfried chicken strips served with dip of choice',
            dish_ingredients: 'Chicken breast, bread crumbs, eggs, salt, pepper, dip of choice',
            dish_allergens: 'Cereals containing gluten (barley, oats), Eggs',
            dish_category: 'appetizers',
            dish_price: 4.75,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Chicken wings',
            dish_description: 'Breaded and deepfried chicken wings',
            dish_ingredients: 'Chicken wings, bread crumbs, eggs, salt, pepper',
            dish_allergens: 'Cereals containing gluten (barley, oats), Eggs',
            dish_category: 'appetizers',
            dish_price: 5.00,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Sausage roll',
            dish_description: 'Flaky pastry with delicious meaty filling',
            dish_ingredients: 'Sausages, puff pastry, egg',
            dish_allergens: 'Cereals containing gluten (barley, oats), Eggs, Milk, Soybeans, Sulphur dioxide and sulphites',
            dish_category: 'appetizers',
            dish_price: 2.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Mini pizza',
            dish_description: 'Classic margherita mini pizza',
            dish_ingredients: 'Flour, yeast, sugar, olive oil, passata, mixed herbs, mozarella',
            dish_allergens: 'Cereals containing gluten (barley, oats), Milk',
            dish_category: 'appetizers',
            dish_price: 3.50,
            dish_available: 'no'
        });
        //EOF APPETIZERS

        //SIDES
        this.db.insert({
            dish_name: 'Chips and cheese',
            dish_description: 'Deepfried chips with mozarella cheese sprinkled on top',
            dish_ingredients: 'Potatoes, mozarella cheese, salt',
            dish_allergens: 'Milk',
            dish_category: 'sides',
            dish_price: 3.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Macaroni and cheese',
            dish_description: 'Pasta in a creamy cheese sauce',
            dish_ingredients: 'Pasta, butter, flour, milk, cheddar, parmesan',
            dish_allergens: 'Cereals containing gluten (barley, oats), Eggs, Milk',
            dish_category: 'sides',
            dish_price: 3.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Baked beans',
            dish_description: 'Beans baked in tomatoe sauce',
            dish_ingredients: 'Beans, tomato paste, ketchup, chicken broth, sugar, salt, pepper, garlic powder, onion powder, cornstarch, worcestershire sauce, cornstarch',
            dish_allergens: 'N/A',
            dish_category: 'sides',
            dish_price: 2.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Cauliflower rice',
            dish_description: 'Low carbohydrate substitute for couscous or rice',
            dish_ingredients: 'Cauliflower',
            dish_allergens: 'N/A',
            dish_category: 'sides',
            dish_price: 2.00,
            dish_available: 'no'
        });
        //EOF SIDES

        //MAIN COURSE
        this.db.insert({
            dish_name: 'Steak and roasted potatoes',
            dish_description: 'Pan fried steak with crispy roasted in duck fat potatoes',
            dish_ingredients: 'Sirloin steak, potatoes, salt, pepper, garlic granules, thyme, duck fat',
            dish_allergens: 'N/A',
            dish_category: 'main course',
            dish_price: 18.45,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Chilli con carne',
            dish_description: 'Spicy stew containing meat and beans',
            dish_ingredients: 'Onion, red pepper, garlic, oil, chilli powder, paprika, cumin, minced beef, beef stock, chopped tomatoes, sugar, tomato puree, kidney beans',
            dish_allergens: 'N/A',
            dish_category: 'main course',
            dish_price: 8.50,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Spaghetti bolognese',
            dish_description: 'True Italian classic - spaghetti with meaty sauce',
            dish_ingredients: 'Olive oil, onions, carrots, celery sticks, garlic, rosemary, beef mince, tomatoes, oregano, bay leaves, tomato puree, beef stock, red wine, spaghetti, parmesan',
            dish_allergens: 'Celery, Cereals containing gluten (barley, oats), Eggs, Milk',
            dish_category: 'main course',
            dish_price: 10.00,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Spaghetti carbonara',
            dish_description: 'Classic Italian creamy pasta - made utilising traditional technique',
            dish_ingredients: 'Pancetta, pecorino cheese, parmesan, eggs, spaghetti, garlic, butter, salt',
            dish_allergens: 'Celery, Cereals containing gluten (barley, oats), Eggs, Milk',
            dish_category: 'main course',
            dish_price: 10.00,
            dish_available: 'no'
        });
        //EOF MAIN COURSE

        //DESSERTS
        this.db.insert({
            dish_name: 'Cheesecake',
            dish_description: 'Cheesecake with chocolate base',
            dish_ingredients: 'Chocolate biscuits, butter, soft cheese, double cream, icing sugar',
            dish_allergens: 'Cereals containing gluten (barley, oats), Milk',
            dish_category: 'desserts',
            dish_price: 4.00,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Red velvet cake',
            dish_description: 'Cake with a lovely deep maroon colour',
            dish_ingredients: 'Flour, baking soda, cocoa powder, salt, butter, sugar, oil, eggs, vanilla extract, white vinegar, red food colouring, buttermilk, cream cheese, salt',
            dish_allergens: 'Cereals containing gluten (barley, oats), Eggs, Milk',
            dish_category: 'desserts',
            dish_price: 4.00,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Lemon sponge cake',
            dish_description: 'Citrussy sponge cake with lemon icing',
            dish_ingredients: 'Butter, sugar, eggs, lemons, flour, baking powder, greek yoghurt, icing sugar',
            dish_allergens: 'Cereals containing gluten (barley, oats), Eggs, Milk',
            dish_category: 'desserts',
            dish_price: 4.00,
            dish_available: 'yes'
        });
        this.db.insert({
            dish_name: 'Crème brûlée',
            dish_description: 'Vanilla custard with caramelised topping',
            dish_ingredients: 'Double cream, whole milk, vanilla pod, egg yolks, sugar',
            dish_allergens: 'Eggs, Milk',
            dish_category: 'desserts',
            dish_price: 4.00,
            dish_available: 'no'
        });
        //EOF DESSERTS

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

    getAppetizers(){
        return new Promise((resolve, reject) => {
            this.db.find({dish_category: 'appetizers', dish_available: 'yes'}).sort({dish_name: 1}).exec(function(err, entries) {
                if(err){
                    reject(err);
                } else {
                    resolve(entries);
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

module.exports = dinner_menu;