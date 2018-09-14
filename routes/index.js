// Require express and create a new instance
// of router on it
const routes = require('express').Router();

// import the cars router
// exported in cars/index.js
const cars = require('./cars');

// import the models router,
// exported in models/index.js
const models = require('./models');

// set the cars router to use as
// middle-ware on the main routes object
routes.use('/cars', cars);

// set the models router to use as
// middle-ware on the main routes object
routes.use('/models', models);

// GET request to the root
routes.get('/', (req, res) => {
    res.status(200).json('Connected!');
});

module.exports = routes;