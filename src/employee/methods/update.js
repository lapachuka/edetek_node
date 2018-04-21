const Employee = require('../employee.model');

module.exports = async function (req, res, next) {
    const employeeData = res.locals.body;
    const employeeModel = new Employee();
    const {id} = res.locals.params;
    let employee;

    try {
        employee = await employeeModel.update(id, employeeData);
    } catch (ex) {
        next(ex);
    }

    return res.status(201).send(employee);
};