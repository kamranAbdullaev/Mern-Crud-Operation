var Service = require("../services/profession.service");

exports.getList = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var content = await Service.getList({}, page, limit);
        return res.status(200).json({
            status: 200,
            content: content,
            message: "Succesfully qualities Retrieved",
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
