"use strict";

const express = require('express');
const router = express.Router();
const {requestValidate} = require('../middlewares');
const {idSchema, createSchema, limitOffsetSchema} = require('./department.schema');

router.get('/', requestValidate(limitOffsetSchema, 'params'), require('./methods/department-list'));
router.get('/:id', requestValidate(idSchema, 'params'), require('./methods/department'));
router.put('/:id', requestValidate(idSchema, 'params'), requestValidate(createSchema), require('./methods/update'));
router.post('/', requestValidate(createSchema), require('./methods/create'));
router.delete('/:id', requestValidate(idSchema, 'params'), require('./methods/remove'));

module.exports = router;