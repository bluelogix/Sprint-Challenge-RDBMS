
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {

    tbl.increments();

    //add foreign key
    tbl
    .integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')

    tbl.string('description', 128).notNullable();
    tbl.text('notes').notNullable();
    tbl.boolean('completed').defaultTo(false);

    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
