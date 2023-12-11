const router = require("express").Router();

router.get("/dinedive");
router.post("/dinedive");
router.get("/dinedive/:id");
router.put("/dinedive/:id");
router.delete("/dinedive/:id");

module.exports = router;
