/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('preference_area').insert([
    {preference_area: 'Rooms'},
    {preference_area: 'F&B'},
    {preference_area: 'Spa'},
    {preference_area: 'Con'},
  ]);
};
