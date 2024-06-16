const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const intDb = (callback) => {
    if (database) {
        console.log('Db is already installed');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
        database = client;
        callback(null,database);
    })
    .catch((err) => {
        callback(err);
    });

};


const getDatabase = () => {
    if (!database) {
       throw Error('Database is not installed')
    }
    return database;
};

module.exports = {intDb, getDatabase};