exports.up = function(knex) {
    return knex.schema
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('task_number')
          .unsigned()
          .notNullable();
        tbl.date('due_date')
          .notNullable();
        tbl.text('compensation')
          .notNullable();
        tbl.text('instructions')
          .notNullable();
        tbl.integer('assigner_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('assigners')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tasks')
  };