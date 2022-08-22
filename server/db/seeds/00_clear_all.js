/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries that has primary keys
  await knex.raw('TRUNCATE property, account, guest_info, stay_info, preference_area, guest_preference RESTART IDENTITY CASCADE');
};