const { Schema, model } = require("mongoose");
const ObjectIdType = Schema.Types.ObjectId;

module.exports = model(
    "Comment",
    new Schema(
        {
            pageId: { type: ObjectIdType, ref: "User", required: true },
            pageId: { type: ObjectIdType, ref: "User", required: true },
            content: { type: String, required: true },
            parentComment: this,
        },
        { timestamps: true }
    )
);
