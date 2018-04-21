const Joi = require('joi');

module.exports = function (schema, target) {
    return async function (req, res, next) {
        const source = target || 'body';
        const data = req[source];

        try {
            res.locals[source] = await Joi.validate(
                data,
                schema,
                {
                    stripUnknown: {
                        arrays: false,
                        objects: true
                    },
                    convert: true,
                    abortEarly: false
                }
            );
            return next()
        } catch (err) {
            err.statusCode = 400;
            err.name = 'ValidationError';
            return next(err)
        }
    }
};