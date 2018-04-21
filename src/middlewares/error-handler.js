"use strict";

module.exports = function errorHandler(err, req, res, next) {
    const status = err.statusCode || 500;
    const body = {
        message: err.message,
        status
    };
    const logger = console;

    if (err.name === 'ValidationError') {
        body.message = err.name;
        body.reasons = err.details;
    }

    if (status > 499) {
        logger.error('error happened', err);

        body.message = 'Error happened';
    }

    logger.error(err.message || err);
    res.status(status).send(body);
};