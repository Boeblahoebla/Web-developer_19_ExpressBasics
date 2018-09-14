// Require the json data to work with
const data = require('../../data.json');

// Grab the car and return the car
// in the response
module.exports = (req, res) => {
    // Convert the carId in the params
    // to int
    const carId = req.params.carId * 1
    // Find a matching id in the data
    // and assign it to the const car
    const car = data.cars.find(
        c => c.id === carId
    );

    // Return the matching car
    res.status(200).json({ car });
};