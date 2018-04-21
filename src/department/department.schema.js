const Joi = require('joi');

const createSchema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required()
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