/* eslint-disable */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bills', table => {
    table
      .uuid('id')
      .notNullable()
      .unique()
      .primary();
    table.string('title', 50).notNullable();
    table.bigInteger('value');
    table.timestamp('expire').defaultTo(knex.fn.now());
    table.string('month').notNullable();
    table.string('year').notNullable();
    table.boolean('status').defaultTo(false);
    table
      .uuid('userId')
      .unsigned()
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .foreign('userId')
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bills');
};

// // create table 'users' with a primary key using 'increments()'
// knex.schema.createTable('users', function (table) {
//   table.increments('userId');
//   table.string('name');
// });

// // reference the 'users' primary key in new table 'posts'
// knex.schema.createTable('posts', function (table) {
//   table.integer('author').unsigned().notNullable();
//   table.string('title', 30);
//   table.string('content');

//   table.foreign('author').references('userId').inTable('users');
// });
