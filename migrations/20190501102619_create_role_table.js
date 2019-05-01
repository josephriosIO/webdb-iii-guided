// implement changes to schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    tbl.timestamps(true, true);
  });
};

//undo changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles");
};
