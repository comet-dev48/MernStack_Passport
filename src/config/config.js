require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    database: {
        url:process.env.MONGODB_URL
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
};
