exports.up = function(knex, Promise) {
    return knex.schema.table('tasks', function(t) {
        t.dropColumn('task_number');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('tasks', function(t) {
        t.enum('task_number').notNull();
    });
};