// Require the json data to work with
const data = require('../../data.json');

// Grab the models and return them
// in the response
module.exports = (req, res) => {
    const models = data.models;
    res.status(200).json({ models });
};