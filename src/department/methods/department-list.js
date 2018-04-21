const Department = require('../department.model');

module.exports = async function (req, res, next) {
    let departments;
    let departmentsModel = new Department();
    const {limit, offset} =  res.locals.params;

    try {
        departments = await departmentsModel.getAll({limit, offset});
    } catch (ex) {
        next(ex);
    }

    return res.send(departments);
};