const { Schema, model } = require("mongoose");
const ObjectIdType = Schema.Types.ObjectId;

module.exports = model(
    "Rate",
    new Schema(
        {
            from: { type: ObjectIdType, required: true },
            to: { type: ObjectIdType, required: true },
            value: { type: Boolean },
        },
        { timestamps: true }
    )
);
