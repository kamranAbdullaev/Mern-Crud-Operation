const { Schema, model } = require("mongoose");

module.exports = model(
    "Profession",
    new Schema(
        {
            name: { type: String, required: true },
        },
        { timestamps: true }
    )
);
