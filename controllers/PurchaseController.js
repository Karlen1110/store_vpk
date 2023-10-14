const asyncHandler = require("express-async-handler");

const purchaseProduct = asyncHandler(async (req, res) => {
  const { products } = req.body;
  // оплата по смарт-контракту
  // добавление товара в бд
  console.log(products);
  res.send(products);
});

const PurchaseController = {
  purchaseProduct,
};

module.exports = PurchaseController;
