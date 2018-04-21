const knex = require('knex')(require('../../knexfile'));

class Department {
    constructor() {
        this.tableName = 'department';
        this.employeeTable = 'employee';
    }

    async createDepartment({name, description}) {
        const department = await knex(this.tableName)
            .returning()
            .insert({
                name,
                description
            })
            .then(id => this.getById({id}));

        return department || {};

    }

    async updateDepartment({id, name, description}) {
        const department = await knex(this.tableName)
            .where({id})
            .update({
                name,
                description
            })
            .then(() => this.getById({id}));


        return department || {};
    }

    async getById({id}) {

        const department = await Promise.all([
            knex(this.tableName)
                .select()
                .where('id', id)
                .first(),
            knex(this.employeeTable)
                .select()
                .where('department_id', id)
        ]).then(values => {
            const resDepartment = values[0];

            resDepartment.employees = values[1];

            return resDepartment;
        });

        return department || {};
    }

    async getAll({limit, offset}) {
        const departments = await knex(this.tableName)
            .limit(limit)
            .offset(offset)
            .select();

        return departments || [];
    }

    async removeById({id}) {
        await knex(this.tableName)
            .where({id})
            .del();

        return 'removed';
    }
}


module.exports = Department;