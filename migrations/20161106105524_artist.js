
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', table =>{
    table.increments('id').primary();
    table.string('name').notNull();
    table.string('image').notNull();
    table.string('path').notNull();
    table.string('website').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist');
};
