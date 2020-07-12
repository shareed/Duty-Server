exports.up = function(knex) {
    return knex.schema
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('taskname').notNullable();
        tbl.date('duedate').notNullable();
        tbl.text('compensation').notNullable();
        tbl.text('description').notNullable();
        tbl.timestamps(true, true);
  
        tbl
          .integer('assigner_id')
          .unsigned()
          .references('id')
          .inTable('assigners')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};