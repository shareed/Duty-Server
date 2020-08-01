exports.up = function(knex) {
    return knex.schema.table('tasks', function(tbl) {
        tbl.text('task_title')
           .notNullable().defaultTo("NONE");
    });
}
        
  
  exports.down = function(knex) {
    return knex.schema.table('tasks', function(tbl) {
        tbl.dropColumn('task_title');
    });
  };