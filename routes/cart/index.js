const router = require("express").Router();
const cart = require("../../controllers/cart/cart.controller");

router.post("/create-cart", cart.createCart);
router.get("/", cart.getCartProduct);
router.delete("/:id", cart.deleteCartProduct);
router.patch("/:id", cart.updateCartProduct);

module.exports = router;
