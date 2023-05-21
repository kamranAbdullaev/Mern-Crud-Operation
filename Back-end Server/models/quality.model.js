const { Schema, model } = require("mongoose");

const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
];

module.exports = model(
    "Quality",
    new Schema(
        {
            name: { type: String, required: true },
            color: { type: String, enum: colors, required: true },
        },
        { timestamps: true }
    )
);
