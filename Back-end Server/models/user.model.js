const { Schema, model } = require("mongoose");
const ObjectIdType = Schema.Types.ObjectId;

module.exports = model(
    "User",
    new Schema(
        {
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            profession: { type: ObjectIdType, ref: "Profession" },
            qualities: [{ type: ObjectIdType, ref: "Quality" }],
            rate: "",
            completedMeetings: "",
        },
        { timestamps: true }
    )
);
