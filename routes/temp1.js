const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/temp3");

router.post("/purchase", purchaseController.purchaseProduct);

module.exports = router;
