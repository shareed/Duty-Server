exports.up = function(knex) {
    return knex.schema.table('tasks', function(tbl) {
        tbl.text('due_date')
           .notNullable().defaultTo(0);
    });
}
        
  
  exports.down = function(knex) {
    return knex.schema.table('tasks', function(tbl) {
        tbl.dropColumn('due_date');
    });
  };