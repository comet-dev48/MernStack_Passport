const mongoose = require('mongoose');
const config = require('./config');

const dbUrl = config.database.url;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
        });

        console.log('MongoDB is connected....');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;