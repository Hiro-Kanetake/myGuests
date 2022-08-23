/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('property').insert([
    {name: 'Grand Chrysalis Park Hotel Tokyo', pincode: 272727},
    {name: 'Grand Hyatt Hotel Tokyo', pincode: 111111},
  ]);
};
