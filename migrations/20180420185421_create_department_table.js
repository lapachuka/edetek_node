
exports.up = function(knex, Promise) {
    return knex.schema.createTable('department', function (t) {
        t.increments('id').unsigned().primary();
        t.string('name').notNullable();
        t.string('description').notNullable();
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('department')
};
