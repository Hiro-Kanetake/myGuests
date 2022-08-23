const knex = require('../db/knex');

const GUEST_TABLE = "guest_info";
const ACCOUNT_TABLE = "account";

module.exports = {
    GUEST_TABLE,

    addGuest(data) {
        return knex
        .insert(data)
        .into(GUEST_TABLE);
    },

    viewGuestCredential(data) {
        return knex
        .select("*")
        .from(ACCOUNT_TABLE)
        .where({ property_id: data.property_id, id: data.account_id });
    },

    getGuest(data) {
        return knex
        .select("*")
        .from(GUEST_TABLE)
        .where({ property_id: data.property_id });
    }
}