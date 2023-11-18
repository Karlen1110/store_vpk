const asyncHandler = require("express-async-handler");
const stockRepository = require("../repository/stockRepository");

const checkStock = asyncHandler(async (req, res) => {
  const { type } = req.query;
  if (!type) throw Error("Нет необходимых данных");
  const stockProducts = await stockRepository.findAll();
  const sortedStockProducts = stockProducts.filter(
    (el) => el.product.type === type
  );
  res.send(sortedStockProducts);
});

const stockController = {
  checkStock,
};

module.exports = stockController;
