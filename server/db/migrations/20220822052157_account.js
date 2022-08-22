/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('account', function (table) {
        table.increments('id');
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.string('position', 255).notNullable();
        table.string('username', 255).notNullable();
        table.integer('property_id').notNullable().references("id").inTable("property").onDelete("CASCADE");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("account");
};