const asyncHandler = require("express-async-handler");
const cartRepository = require("../repository/cartRepository");

const getCart = asyncHandler(async (req, res) => {
  const { id } = req.query;
  if (!id) throw Error("Введите id пользователя");
  const products = await cartRepository.findAll({ userId: id });
  res.send(products);
});

const addProductToCart = asyncHandler(async (req, res) => {
  const { productId, userId } = req.body;
  if (!productId || !userId) throw Error("Запрос пустой");
  const cartItem = {
    quantity: 1,
    productId,
    userId,
  };
  const response = await cartRepository.create(cartItem);
  res.send(response);
});

const deleteProductFromCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) throw Error("Запрос пустой");
  await cartRepository.delete({ id });
  res.send("ok");
});

const productController = {
  getCart,
  addProductToCart,
  deleteProductFromCart,
};

module.exports = productController;
