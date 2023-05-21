const Model = require("../models/profession.model");

exports.getList = async function (query, page, limit) {
    try {
        const data = await Model.find(query);
        return data;
    } catch (e) {
        // Log Errors
        throw Error("Error while Paginating Qualities");
    }
};
