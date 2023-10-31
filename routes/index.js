const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/purchaseController");
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");

router.get("/products", productController.getProducts);
router.get("/cart", cartController.getCart);
router.post("/cart", cartController.addProductToCart);
router.delete("/cart/:id", cartController.deleteProductFromCart);
router.post("/purchase", purchaseController.purchaseProduct);

module.exports = router;
