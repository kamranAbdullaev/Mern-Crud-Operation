const { Schema, model } = require("mongoose");

module.exports = model(
    "Favourites",
    new Schema(
        {
            from: { type: String, required: true },
            to: { type: String, required: true },
        },
        { timestamps: true }
    )
);
