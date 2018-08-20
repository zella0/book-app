
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Authors', (table)=>{
    table.increments(); // id
    table.string('name');
    table.text('bio');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Authors');
};
