// Require express and create a new
// instance of router on it
// having mergeParams set to true
// to merge the its own params with its parent
const cars = require('express').Router(
    { mergeParams: true });

// Require the router for all models
const all = require('./all');

// Get request for al the models
// is routed to the file all.js
// in the same folder
cars.get('/', all);

// Export cars to be used
module.exports = cars;