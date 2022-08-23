const propertyModel = require('../model/property');
const validation = require('./validation');

module.exports = {
    async authenticatePropertyId(req, res) {
        const propertyId = req.query;
        if (!validation.validatePropertyId(propertyId)) {
            res.status(406).send("BAD DATA. TRY AGAIN");
        } else {
            const [matchingProperty] = await propertyModel.authenticatePropertyId(propertyId);
            if (!matchingProperty) {
                res.status(404).send("PROPERTY NOT FOUND");
            } else {
                res.status(200).json({ name: matchingProperty.name });
            }
        }
    },
}