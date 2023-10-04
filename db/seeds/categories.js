/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Categories').del()
  await knex('Categories').insert([
    {CategoryID: 1, CategoryName: 'Beverages', Description: 'Soft drinks, coffees, teas, beers, and ales', Picture: 'no photo'},
    {CategoryID: 2, CategoryName: 'Condiments', Description: 'Sweet and savory sauces, relishes, spreads, and seasonings', Picture: 'no photo'},
    {CategoryID: 3, CategoryName: 'Confections', Description: 'Desserts, candies, and sweet breads', Picture: 'no photo'},
    {CategoryID: 4, CategoryName: 'Dairy Products', Description: 'Cheeses', Picture: 'no photo'},
    {CategoryID: 5, CategoryName: 'Grains/Cereals', Description: 'Breads, crackers, pasta, and cereal', Picture: 'no photo'},
    {CategoryID: 6, CategoryName: 'Meat/Poultry', Description: 'Prepared meats', Picture: 'no photo'},
    {CategoryID: 7, CategoryName: 'Produce', Description: 'Dried fruit and bean curd', Picture: 'no photo'},
    {CategoryID: 8, CategoryName: 'Seafood', Description: 'Seaweed and fish', Picture: 'no photo'}
  ]);
};
