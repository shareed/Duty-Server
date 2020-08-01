exports.up = function(knex, Promise) {
    return knex.schema.createTable('assigners', tbl => {
      tbl.increments();
      tbl.text('username', 128).unique().notNullable();
      tbl.text('email').unique().notNullable();
      tbl.integer('phoneNumber').unique().notNullable();
      tbl.text('password').notNullable();
      
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('assigners');
  }
