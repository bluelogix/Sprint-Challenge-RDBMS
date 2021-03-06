
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){
      //projects primary key
      tbl.increments();
      
      tbl.string('name', 128).notNullable();
      tbl.text('description').notNullable();
      tbl.boolean('completed').defaultTo(false);

      tbl.timestamps(true, true)

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
