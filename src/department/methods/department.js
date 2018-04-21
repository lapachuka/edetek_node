const Department = require('../department.model');

module.exports = async function (req, res, next) {
    let department;
    let departmentModel = new Department();
    const {id} = res.locals.params;

    try {
        department = await departmentModel.getById({id})
    } catch (ex) {
       next(ex);
    }

    return res.send(department);
};