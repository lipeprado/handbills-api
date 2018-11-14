exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table
      .uuid('id')
      .notNullable()
      .unique()
      .primary();
    table.string('firstName', 50).notNullable();
    table.string('lastName', 50);
    table.string('password', 150).notNullable();
    table.string('email', 100).unique();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
