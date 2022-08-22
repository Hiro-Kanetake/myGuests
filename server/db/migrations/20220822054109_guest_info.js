/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('guest_info', function(table) {
    table.increments('id');
    table.integer('property_id').notNullable().references("id").inTable("property").onDelete("CASCADE");
    table.string('title', 36).notNullable();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('local_name_spelling', 255);
    table.date('date_of_birth');
    table.string('company', 255);
    table.string('position', 255);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('guest_info');
};