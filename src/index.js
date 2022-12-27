const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./config/connectdb');
const jwtStrategy = require('./config/passport');
const routes = require('./routes');
const config = require('./config/config');

const app = express();
const port = config.port || 3002;

// for testing
app.use(cors());

//load database
connectDB();

// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// api routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});