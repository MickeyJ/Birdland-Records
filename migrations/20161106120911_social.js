
exports.up = function(knex, Promise) {
  return knex.schema.createTable('social', table =>{
    table.integer('artist_id').notNull();
    table.string('facebook');
    table.string('twitter');
    table.string('instagram');
    table.string('soundcloud');
    table.string('youtube');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('social')
};
