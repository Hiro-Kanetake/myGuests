/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('preference_area', function(table){
    table.increments('id');
    table.string('preference_area', 10).notNullable();
  })
  .createTable('guest_preference', function(table){
    table.increments('id');
    table.integer('property_id').notNullable().references("id").inTable("property").onDelete("CASCADE");
    table.integer('guest_id').notNullable().references("id").inTable("guest_info").onDelete("CASCADE");
    table.integer('preference_area_id').notNullable().references("id").inTable("preference_area").onDelete("CASCADE");
    table.string('preference_note', 255);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('preference_area')
    .dropTable('guest_preference');
  
};
