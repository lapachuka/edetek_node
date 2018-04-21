const Employee = require('../employee.model');

module.exports = async function (req, res, next) {
    const employeeModel = new Employee();
    const {id} = res.locals.params;

    try {
         await employeeModel.removeById({id});
    } catch (ex) {
        next(ex);
    }

    return res.status(200).send('Removed');
};