/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('stay_info', function(table) {
    table.increments('id');
    table.integer('guest_id').notNullable().references("id").inTable("guest_info").onDelete("CASCADE");
    table.integer('property_id').notNullable().references("id").inTable("property").onDelete("CASCADE");
    table.date('arrival_date').notNullable;
    table.date('departure_date').notNullable;
    table.integer('room_number', 4);
    table.string('stay_occasion', 255);
    table.string('booking_source', 255);
    table.decimal('room_rate');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('stay_info');
};