const Joi = require('joi');

const createSchema = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone: Joi.string().default(''),
    salary: Joi.number().default(0),
    department_id: Joi.number().integer().required()

});

const idSchema = Joi.object().keys({
    id: Joi.number().integer().required(),
});

const limitOffsetSchema = Joi.object().keys({
    limit: Joi.number().integer().default(10),
    offset: Joi.number().integer().default(0),
});


module.exports = {
    idSchema,
    createSchema,
    limitOffsetSchema
};