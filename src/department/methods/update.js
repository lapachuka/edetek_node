const Department = require('../department.model');

module.exports = async function (req, res, next) {
    const departmentModel = new Department();
    const {name, description} = res.locals.body;
    const {id} = res.locals.params;
    let department;

    try {
        department = await departmentModel.updateDepartment({id, name, description});
    } catch (ex) {
        next(ex);
    }

    return res.send(department);
};