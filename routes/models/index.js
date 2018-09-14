// Require express and create a new
// instance of router on it
const models = require('express').Router();

// Require the router to all models
const all = require('./all');

// Require the router to a single model
const single = require('./single');

// Require the router for all cars per model
const carsPerModel = require('./cars');

// Set the carsPerModel router to use
// as middle-ware on the main routes object
models.use('/:modelId/cars', carsPerModel);

// Get request for al the models
// is routed to the file all.js
// in the same folder
models.get('/', all);

// Get request for a single model
// is routed to the file single.js
// in the same folder
models.get('/:modelId', single);

// Export models to be used
// in routes/index.js
module.exports = models;