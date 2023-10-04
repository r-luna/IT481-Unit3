/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Region').del()
  await knex('Region').insert([
    {RegionDescription: 'Eastern'},
    {RegionDescription: 'Western'},
    {RegionDescription: 'Northern'},
    {RegionDescription: 'Southern'}
  ]);
};
