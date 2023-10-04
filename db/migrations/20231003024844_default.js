/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('Employees', function (table) {
        table.increments('EmployeeID');
        table.string('LastName', 20).notNullable();
        table.string('FirstName', 10).notNullable();
        table.string('Title', 30).notNullable();
        table.string('TitleOfCourtesy', 25).notNullable();
        table.date('BirthDate').notNullable();
        table.date('HireDate').notNullable();
        table.string('Address', 60).notNullable();
        table.string('City', 15).notNullable();
        table.string('Region', 15).notNullable();
        table.string('PostalCode', 10).notNullable();
        table.string('Country', 15).notNullable();
        table.string('HomePhone', 24).notNullable();
        table.decimal('Salary').notNullable();
        table.string('Extension', 4).notNullable();
        table.string('Photo', 15).notNullable();
        table.string('Notes', 1500).notNullable();
        table.string('ReportsTo', 15).notNullable();
        table.string('PhotoPath', 155).notNullable();
    })
    .createTable('Categories', function (table) {
        table.increments('CategoryID');
        table.string('CategoryName', 15).notNullable();
        table.string('Description', 1500).notNullable();
        table.string('Picture').notNullable();
    })
    .createTable('Customers', function (table) {
      table.increments('ID');
      table.string('CustomerID', 40).unique().notNullable();
      table.string('CompanyName', 40).notNullable();
      table.string('ContactName', 30).notNullable();
      table.string('ContactTitle', 30).notNullable();
      table.string('Address', 60).notNullable();
      table.string('City', 15).notNullable();
      table.string('Region', 15);
      table.string('PostalCode', 10).notNullable();
      table.string('Country', 15).notNullable();
      table.string('Phone', 24).notNullable();
      table.string('Fax', 24);
  })
  .createTable('Shippers', function (table) {
    table.increments('ShipperID');
    table.string('CompanyName', 40).notNullable();
    table.string('Phone', 24).notNullable();
  })
  .createTable('Suppliers', function (table) {
    table.increments('SupplierID');
    table.decimal('CompanyName', 40).notNullable();
    table.string('ContactName', 30).notNullable();
    table.string('ContactTitle', 30).notNullable();
    table.string('Address', 60).notNullable();
    table.string('City', 15).notNullable();
    table.string('Region', 15).notNullable();
    table.string('PostalCode', 10).notNullable();
    table.string('Country', 15).notNullable();
    table.string('Phone', 24).notNullable();
    table.string('Fax', 24).notNullable();
    table.string('HomePage', 255).notNullable();
  })
  .createTable('Orders', function (table) {
    table.increments('OrderID');
    table.decimal('CustomerID', 5).notNullable();
    table.string('EmployeeID', 30).notNullable();
    table.date('OrderDate').notNullable();
    table.date('RequiredDate').notNullable();
    table.date('ShippedDate').notNullable();
    table.string('ShipVia', 15).notNullable();
    table.decimal('Freight').notNullable();
    table.string('ShipName', 40).notNullable();
    table.string('ShipAddress', 60).notNullable();
    table.string('ShipCity', 15).notNullable();
    table.string('ShipRegion', 15).notNullable();
    table.string('ShipPostalCode', 10).notNullable();
    table.string('ShipCountry', 15).notNullable();
  })
  .createTable('Products', function (table) {
    table.increments('ProductID');
    table.string('ProductName', 40).notNullable();
    table.decimal('SupplierID', 30).notNullable();
    table.decimal('CategoryID').notNullable();
    table.string('QuantityPerUnit', 20).notNullable();
    table.string('ShippedDate').notNullable();
    table.decimal('UnitPrice', 15).notNullable();
    table.string('UnitsInStock', 5).notNullable();
    table.string('UnitsOnOrder', 5).notNullable();
    table.string('ReorderLevel', 5).notNullable();
    table.boolean('Discontinued', 15).notNullable();
  })
  .createTable('OrderDetails', function (table) {
    table.increments('OrderID');
    table.decimal('ProductID').notNullable();
    table.decimal('UnitPrice').notNullable();
    table.decimal('Quantity').notNullable();
    table.string('Discount', 20).notNullable();
  })
  .createTable('CustomerCustomerDemo', function (table) {
    table.increments('CustomerID');
    table.decimal('CustomerTypeID').notNullable();
  })
  .createTable('CustomerDemographics', function (table) {
    table.increments('CustomerTypeID');
    table.string('CustomerDesc', 250).notNullable();
  })
  .createTable('Region', function (table) {
    table.increments('RegionID');
    table.string('RegionDescription', 250).notNullable();
  })
  .createTable('Territories', function (table) {
    table.increments('TerritoryID');
    table.string('TerritoryDescription', 250).notNullable();
  })
  .createTable('EmployeeTerritories', function (table) {
    table.increments('EmployeeID');
    table.decimal('TerritoryID').notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('Employees')
    .dropTable('Categories')
    .dropTable('Customers')
    .dropTable('Shippers')
    .dropTable('Suppliers')
    .dropTable('Orders')
    .dropTable('Products')
    .dropTable('OrderDetails')
    .dropTable('CustomerCustomerDemo')
    .dropTable('CustomerDemographics')
    .dropTable('Region')
    .dropTable('Territories');
};
