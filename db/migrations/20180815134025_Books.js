exports.up = function(knex, Promise) {
  return knex.schema.createTable('Books', (table) => {
    table.increments(); // id
    table.string('title');
    table.text('img_url');
    table.string('description');
    table.integer('author_id')
      .notNullable()
      .references('id')
      .inTable('Authors')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Books');
};
