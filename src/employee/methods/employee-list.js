const Employee = require('../employee.model');

module.exports = async function (req, res, next) {
    const employeeModel = new Employee();
    const {limit, offset} = res.locals.params;
    let employee;

    try {
        employee = await employeeModel.getAll({limit, offset});
    } catch (ex) {
        next(ex);
    }

    return res.status(201).send(employee);
};