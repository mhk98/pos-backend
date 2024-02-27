const router = require("express").Router();
const user = require("./users");
const cart = require("./cart");

router.use("/user", user);
router.use("/cart", cart);

module.exports = router;
