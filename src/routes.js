"use strict";

const express = require('express');
const apiRouter = express.Router();
const router = express.Router();

apiRouter.use('/api', router);
router.use('/departments', require('./department/department.router'));
router.use('/employees', require('./employee/employee.router'));
router.use(require('./middlewares/error-handler'));

module.exports = apiRouter;