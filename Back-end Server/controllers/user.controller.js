var UserService = require("../services/user.service");

exports.getUserList = async function (req, res, next) {
    // Validate request parameters, queries using express-validator

    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var users = await UserService.getUserList({}, page, limit);
        return res.status(200).json({
            status: 200,
            content: users,
            message: "Succesfully Users Retrieved",
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
exports.getUser = async function (req, res, next) {
    // Validate request parameters, queries using express-validator

    try {
        const user = await UserService.getUser(req.userId || req.params.userId);
        console.log(user);
        return res.status(200).json({
            status: 200,
            content: user,
            message: "Succesfully Users Retrieved",
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
