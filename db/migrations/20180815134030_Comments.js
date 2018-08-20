exports.up = function(knex, Promise) {
  return knex.schema.createTable('Comments', (table) => {
    table.increments(); // id
    table.string('commenter_name');
    table.string('content');
    table.integer('book_id')
      .notNullable()
      .references('id')
      .inTable('Books')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Comments');
};
