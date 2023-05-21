const Quality = require("../models/quality.model");
exports.get = async function (id) {
    try {
        const data = await Quality.findById(id);
        return data;
    } catch (error) {
        throw Error("Quality not found");
    }
};

exports.update = async function (id, dataUpdate) {
    try {
        const data = await Quality.findByIdAndUpdate(id, dataUpdate, {
            new: true,
        });
        console.log(data);
        return data;
    } catch (error) {
        throw Error("Quality not found");
    }
};
exports.add = async function (data) {
    try {
        const quality = new Quality(data);
        await quality.save();
        return quality;
    } catch (error) {
        throw Error(error);
    }
};
exports.delete = async function (id) {
    try {
        const quality = await Quality.findByIdAndDelete(id);
        if (quality === null) {
            throw Error("Not found");
        }
        return quality;
    } catch (error) {
        throw Error("Quality Not Found");
    }
};

exports.getList = async function (query, page, limit) {
    try {
        const data = await Quality.find(query);
        return data;
    } catch (e) {
        // Log Errors
        throw Error("Error while Paginating Qualities");
    }
};
