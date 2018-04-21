const express = require('express');
const router = express.Router();
const {requestValidate} = require('../middlewares');
const {idSchema, createSchema, limitOffsetSchema} = require('./employee.schema');

router.get('/', requestValidate(limitOffsetSchema, 'params'), require('./methods/employee-list'));
router.get('/:id', requestValidate(idSchema, 'params'), require('./methods/employee'));
router.put('/:id', requestValidate(idSchema, 'params'), requestValidate(createSchema), require('./methods/update'));
router.post('/', requestValidate(createSchema), require('./methods/create'));
router.delete('/:id', requestValidate(idSchema, 'params'), require('./methods/remove'));

module.exports = router;