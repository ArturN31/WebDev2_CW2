const nedb = require('nedb'); //import nedb

class staff {
    //db constructor
    constructor(dbFilePath = 'db/staff.db') {
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
        this.db.ensureIndex({ fieldName: 'user', unique: true }, function (err) {
        });
        this.db.insert( {
            user: 'staff',
            password: '$2b$10$gDEPk.I0aT7tMffTgvxXlOvYuQpqIHGr8yIj6qQfxpm.qvW8mZIYy' //staff123
        })
    }

    lookup(user, cb) {
        this.db.find({'user': user}, function (err, entry) {
            if(err) {
                return cb(null, null);
            } else {
                if(entry.length == 0) {
                    return cb(null, null);
                }
                return cb(null, entry[0]);
            }
        });
    }

}

module.exports = staff;