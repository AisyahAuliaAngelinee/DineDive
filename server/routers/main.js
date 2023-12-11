const router = require("express").Router();
const cuisineRoute = require("./cuisine");

router.post("/login");
router.post("/register");
router.use(cuisineRoute);

module.exports = router;
