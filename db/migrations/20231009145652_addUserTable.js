/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('users', (table)=> {
    table.increments('id');
    table.string('username');
    table.string('password_hash');
    table.string('role');
    }
)
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
};
