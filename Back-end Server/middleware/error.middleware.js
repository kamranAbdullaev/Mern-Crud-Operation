module.exports = function (err, req, res, next) {
    res.status(err.status).json({ message: err.message, errors: err.errors });
};
