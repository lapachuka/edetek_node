const Department = require('../department.model');

module.exports = async function (req, res, next) {
    const {name, description,} = res.locals.body;
    const departmentModel = new Department();
    let department;

    try {
        department = await departmentModel.createDepartment({name: name, description: description});
    } catch (ex) {
        next(ex);
    }

    return res.status(201).send(department);
};