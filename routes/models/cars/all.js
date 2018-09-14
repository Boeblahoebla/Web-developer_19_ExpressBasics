// Requre the json data to work with
const data = require('../../../data.json');

// Grab the cars of the model and
// return it in the response
module.exports = (req, res) => {
    // Convert the modelId param to int
    const modelId = req.params.modelId * 1;

    // Filter all the cars having the
    // requested modelId
    const cars = data.cars.filter(
        car => car.modelId === modelId
    );

    // Return the cars matching the request
    res.status(200).json({ cars });
};

