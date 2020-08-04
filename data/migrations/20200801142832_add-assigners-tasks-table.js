
exports.up = function(knex) {
    return knex.schema
    .createTable('assigner_tasks', tbl => {
        tbl.increments('id');
        tbl.integer('assigner_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('assigners');
        tbl.integer('task_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('tasks')
            .onDelete('CASCADE');
        tbl.text('notes', 1024);   
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('assigner_tasks')
};
