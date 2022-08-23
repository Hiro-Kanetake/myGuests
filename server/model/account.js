const knex = require('../db/knex');

const ACCOUNT_TABLE = "account";
const PROPERTY_TABLE = "property";

module.exports = {
    ACCOUNT_TABLE,

    createAccount(data) {
        return knex
        .insert(data)
        .into(ACCOUNT_TABLE);
    },

    checkPincode(data) {
        return knex
        .select("*")
        .from(PROPERTY_TABLE)
        .where({ id: data.property_id, pincode: data.pincode });
    },

    authenticateAccount(loginInfo) {
        return knex
        .select("*")
        .from(ACCOUNT_TABLE)
        .where({ username: loginInfo.username, property_id: loginInfo.property_id });
    }

}