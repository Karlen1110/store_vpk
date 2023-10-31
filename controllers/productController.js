const asyncHandler = require("express-async-handler");
const productRepository = require("../repository/productRepository");

const getProducts = asyncHandler(async (req, res) => {
  const { type } = req.query;
  if (!type) throw Error("Введите тип товара");
  const products = await productRepository.findAll({ type });
  res.send(products);
});

const productController = {
  getProducts,
};

module.exports = productController;
