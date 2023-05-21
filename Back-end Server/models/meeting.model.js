const { Schema, model } = require("mongoose");
const ObjectIdType = Schema.Types.ObjectId;

module.exports = model(
    "Meeting",
    new Schema(
        {
            users: { type: ObjectIdType, required: true },
            status: {
                type: String,
                enum: ["pending", "waiting", "completed", "refusal"],
            },
        },
        { timestamps: true }
    )
);
