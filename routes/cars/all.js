// Require the json data to work with
const data = require('../../data.json');

// Grab the cars and return them
// in the response
module.exports = (req, res) => {
    const cars = data.cars;

    // Return the json object cars
    res.status(200).json({ cars });
};