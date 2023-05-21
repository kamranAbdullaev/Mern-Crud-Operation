var User = require("../models/user.model");

exports.getUserList = async function (query, page, limit) {
    try {
        var users = await User.find(query);

        return users;
    } catch (e) {
        // Log Errors
        throw Error("Error while Paginating Users");
    }
};
exports.getUser = async function (id) {
    try {
        var users = await User.findById(id);
        return users;
    } catch (e) {
        // Log Errors
        throw Error("Error while Paginating Users");
    }
};

exports.addUser = async function (query, page, limit) {
    try {
        var users = await User.find(query);
        return users;
    } catch (e) {
        // Log Errors
        throw Error("Error while Paginating Users");
    }
};
