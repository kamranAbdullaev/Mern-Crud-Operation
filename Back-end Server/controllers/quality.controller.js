var Service = require("../services/quality.service");

exports.getList = async function (req, res, next) {
    // Validate request parameters, queries using express-validator

    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var qualities = await Service.getList({}, page, limit);
        return res.status(200).json({
            status: 200,
            content: qualities,
            message: "Succesfully qualities Retrieved",
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
exports.get = async function (req, res, next) {
    const { id } = req.params;
    try {
        const quality = await Service.get(id);
        return res.status(200).json({
            status: 200,
            content: quality,
            message: "Succesfully quality Retrieved",
        });
    } catch (e) {
        return res.status(404).json({ status: 404, message: e.message });
    }
};
exports.update = async function (req, res, next) {
    const { id } = req.params;
    try {
        const quality = await Service.update(id, req.body);
        return res.status(200).json({
            status: 200,
            content: quality,
            message: "Succesfully updated",
        });
    } catch (e) {
        return res.status(404).json({ status: 404, message: e.message });
    }
};
exports.add = async function (req, res, next) {
    try {
        const quality = await Service.add(req.body);
        return res.status(200).json({
            status: 200,
            content: quality,
            message: "Succesfully created",
        });
    } catch (e) {
        return res.status(400).json({ status: 404, message: e.message });
    }
};
exports.delete = async function (req, res, next) {
    const { id } = req.params;
    try {
        const quality = await Service.delete(id);
        return res.status(200).json({
            status: 200,
            content: quality,
            message: "Succesfully deleted",
        });
    } catch (e) {
        return res.status(404).json({ status: 404, message: e.message });
    }
};
