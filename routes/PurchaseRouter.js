const express = require("express");
const router = express.Router();
const PurchaseController = require("../controllers/PurchaseController");

router.post("/purchase", PurchaseController.purchaseProduct);

module.exports = router;
