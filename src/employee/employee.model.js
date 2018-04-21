const knex = require('knex')(require('../../knexfile'));

class Employee {
    constructor() {
        this.tableName = 'employee';
    }

    async create(employeeData) {
        const employee = knex(this.tableName)
            .insert(employeeData)
            .then((id) => {
                return this.getById({id});
            });

        return employee || {};
    }

    async update(id, employee) {
        const employeesRow = await knex(this.tableName)
            .where({id})
            .update(employee)
            .returning('*');

        return employeesRow[0] || {};
    }

    async getById({id}) {
        const employee = knex(this.tableName)
            .where({id})
            .select()
            .first();

        return employee || {};
    }

    async getAll({limit, offset}) {
        const employees =  knex(this.tableName)
            .limit(limit)
            .offset(offset)
            .select();

        return employees || [];
    }

    removeById({id}) {
        return knex(this.tableName)
            .where({id})
            .del()
    }

}


module.exports = Employee;