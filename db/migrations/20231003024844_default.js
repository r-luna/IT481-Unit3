/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('Employees', function (table) {
        table.increments('EmployeeID');
        table.string('LastName', 60).notNullable();
        table.string('FirstName', 60).notNullable();
        table.string('Title', 60).notNullable();
        table.string('TitleOfCourtesy', 25).notNullable();
        table.date('BirthDate').notNullable();
        table.date('HireDate').notNullable();
        table.string('Address', 60).notNullable();
        table.string('City', 60).notNullable();
        table.string('Region', 60).notNullable();
        table.string('PostalCode', 10);
        table.string('Country', 60).notNullable();
        table.string('HomePhone', 24).notNullable();
        table.decimal('Salary').notNullable();
        table.string('Extension', 4);
        table.string('Photo');
        table.string('Notes', 2500);
        table.string('ReportsTo', 60).notNullable();
        table.string('PhotoPath', 2500);
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
      table.string('PostalCode', 10);
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
    table.string('SupplierID', 40).notNullable();
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
    table.string('HomePage', 255);
  })
  .createTable('Orders', function (table) {
    table.decimal('OrderID').notNullable();
    table.string('CustomerID', 55).notNullable();
    table.string('EmployeeID', 30).notNullable();
    table.string('OrderDate').notNullable();
    table.string('RequiredDate').notNullable();
    table.string('ShippedDate');
    table.string('ShipVia', 15).notNullable();
    table.decimal('Freight').notNullable();
    table.string('ShipName', 40).notNullable();
    table.string('ShipAddress', 60).notNullable();
    table.string('ShipCity', 15).notNullable();
    table.string('ShipRegion', 15);
    table.string('ShipPostalCode', 10);
    table.string('ShipCountry', 15).notNullable();
  })
  .createTable('Products', function (table) {
    table.decimal('ProductID').notNullable();
    table.string('ProductName', 40).notNullable();
    table.decimal('SupplierID', 30).notNullable();
    table.decimal('CategoryID').notNullable();
    table.string('QuantityPerUnit', 20).notNullable();
    table.string('ShippedDate');
    table.decimal('UnitPrice', 15).notNullable();
    table.string('UnitsInStock', 5).notNullable();
    table.string('UnitsOnOrder', 5).notNullable();
    table.string('ReorderLevel', 5).notNullable();
    table.string('Discontinued', 15).notNullable();
  })
  .createTable('OrderDetails', function (table) {
    table.decimal('OrderID').notNullable();
    table.decimal('ProductID').notNullable();
    table.decimal('UnitPrice').notNullable();
    table.decimal('Quantity').notNullable();
    table.string('Discount', 20);
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
    table.string('TerritoryID', 12).notNullable();
    table.string('TerritoryDescription', 250).notNullable();
    table.decimal('RegionID').notNullable();
  })
  .createTable('EmployeeTerritories', function (table) {
    table.string('EmployeeID');
    table.string('TerritoryID').notNullable();
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
    .dropTable('Territories')
    .dropTable('EmployeeTerritories');
};
