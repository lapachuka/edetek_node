exports.up = function (knex, Promise) {
    return knex.schema.createTable('employee', function (t) {
        t.increments('id').primary();
        t.string('first_name', 45).notNullable();
        t.string('last_name', 45).notNullable();
        t.string('phone', 45).notNullable();
        t.decimal('salary').notNullable();
        t.integer('department_id').unsigned();
        t.foreign('department_id').references('department.id').onDelete('set null').onUpdate('CASCADE')
        t.timestamps(false, true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('employee')
};

