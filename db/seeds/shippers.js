/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Shippers').del()
  await knex('Shippers').insert([
    {'ShipperID':1,'CompanyName':'Speedy Express',
'Phone':'(503) 555-9831'},
    {'ShipperID':2,'CompanyName':'United Package',
'Phone':'(503) 555-3199'},
    {'ShipperID':3,'CompanyName':'Federal Shipping',
'Phone':'(503) 555-9931'}
  ]);
};
