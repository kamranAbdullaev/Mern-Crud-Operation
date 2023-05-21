const express = require("express");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const qualityRoute = require("./quality.route");
const professionRoute = require("./profession.route");
const router = express.Router({ mergeParams: true });

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/quality", qualityRoute);
router.use("/profession", professionRoute);

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.use("/api/v1", router);
};
