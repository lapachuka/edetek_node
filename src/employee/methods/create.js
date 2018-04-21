const Employee = require('../employee.model');

module.exports = async function (req, res, next) {
    const employeeData = res.locals.body;
    const employeeModel = new Employee();
    let employee;

    try {
        employee = await employeeModel.create(employeeData);
    } catch (ex) {
        next(ex);
    }

    return res.status(201).send(employee);
};