
exports.up = function(knex, Promise) {
    return knex.schema.createTable('assigners', tbl => {
      tbl.increments();
      tbl.text('username', 128).unique().notNullable();
      tbl.text('email').unique().notNullable();
      tbl.text('password').notNullable();
      tbl.integer('phonenumber').unique().notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('assigners');
  };