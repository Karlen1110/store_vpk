const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/purchaseController");
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");
const stockController = require("../controllers/stockController");

router.get("/products", productController.getProducts);
router.get("/cart", cartController.getCart);
router.post("/cart", cartController.addProductToCart);
router.delete("/cart/:id", cartController.deleteProductFromCart);
router.post("/purchase", purchaseController.purchaseProduct);
router.get("/stock", stockController.checkStock);

module.exports = router;
