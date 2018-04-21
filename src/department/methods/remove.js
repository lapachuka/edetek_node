const Department = require('../department.model');

module.exports = async function (req, res, next) {
    const id = req.params.id;
    const departmentModel = new Department();

    try {
        await departmentModel.removeById({id});
    } catch (ex) {
        next(ex);
    }


    return res.send('Department deleted');
};