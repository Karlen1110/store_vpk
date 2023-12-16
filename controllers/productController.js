const asyncHandler = require("express-async-handler");
const productRepository = require("../repository/productRepository");

const getProducts = asyncHandler(async (req, res) => {
  const { type } = req.query;
  if (!type) throw Error("Введите тип товара");
  const products = await productRepository.findAll({ type });
  res.send(products);
});

const addProducts = asyncHandler(async (req, res) => {
  const products = req.body;
  if (!products) throw Error("Нет данных");
  products.forEach(async (el) => {
    await productRepository.create(el);
  });
  res.send(products);
});

const productController = {
  getProducts,
  addProducts,
};

module.exports = productController;
