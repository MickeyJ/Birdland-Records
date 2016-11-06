

exports.up = function(knex, Promise) {
  return knex.schema.createTable('release', table =>{
    table.integer('artist_id').notNull();
    table.string('title');
    table.string('date');
    table.string('image');
    table.string('apple_music');
    table.string('itunes');
    table.string('spotify');
    table.string('soundcloud');
    table.string('youtube');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('release')
};
