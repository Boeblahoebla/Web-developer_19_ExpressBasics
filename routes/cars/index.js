// Require express and create a new
// instance of router on it
const cars = require('express').Router();

// Require the router to all cars
const all = require('./all');

// Require the router to a single car
const single = require('./single');

// Get request for a:l the cars
// is routed to the file all.js
// in the same folder
cars.get('/', all);

// Get request for a single car
// is routed to the file single.js
// in the same folder
cars.get('/:carId', single);

module.exports = cars;