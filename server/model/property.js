const knex = require('../db/knex');

const PROPERTY_TABLE = "property";

module.exports = {
    authenticatePropertyId(propertyId) {
        return knex
        .select("*")
        .from(PROPERTY_TABLE)
        .where({ id: propertyId.id });
    }
}