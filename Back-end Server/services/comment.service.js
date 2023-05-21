var User = require("../models/user.model");

exports.getUsers = async function (query, page, limit) {
    try {
        var users = await User.find(query);
        return users;
    } catch (e) {
        // Log Errors
        throw Error("Error while Paginating Users");
    }
};
