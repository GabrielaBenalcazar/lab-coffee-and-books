const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
});

router.use("/", require("./places.routes"));
router.use("/api", require("./api.routes"));
module.exports = router;
