const Employee = require('../employee.model');

module.exports = async function (req, res, next) {
    const employeeModel = new Employee();
    const {id} = res.locals.params;
    let employee;

    try {
        employee = await employeeModel.getById({id});
    } catch (ex) {
        next(ex);
    }

    return res.status(201).send(employee);
};