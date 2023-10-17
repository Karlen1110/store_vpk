const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/PurchaseController");

router.post("/purchase", purchaseController.purchaseProduct);

module.exports = router;
