// Require the json data to work with
const data = require('../../data.json');

// Grab the model and return the model
// in the response
module.exports = (req, res) => {
    // Convert the modelId in the params
    // to int
    const modelId = req.params.modelId * 1;
    // Find a matching id in the data
    // and assign it to const model
    const model = data.models.find(
        mod => mod.id === modelId
    );

    // Return the matching model
    res.status(200).json({ model })
};