exports.up = function(knex, Promise) {
    return knex.schema.table('tasks', function(t) {
        t.dropColumn('due_date');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('due_date', function(t) {
        t.enum('due_date').notNull();
    });
};