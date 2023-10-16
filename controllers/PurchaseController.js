const asyncHandler = require("express-async-handler");
const stockRepository = require("../repository/StockRepository");

const purchaseProduct = asyncHandler(async (req, res) => {
  const products = req.body;
  // оплата по смарт-контракту (пока не описана)
  // добавление товаров
  if (!!products.length && products.length > 0) {
    products.forEach(async (el) => {
      const foundProduct = await stockRepository.findOne({ name: el.name });
      if (foundProduct) {
        await foundProduct.update({
          quantity: foundProduct.quantity + el.quantity,
        });
        return;
      }
      await stockRepository.create(el);
    });
    return res.send(products);
  }
  const newProduct = await stockRepository.create(products);
  res.send(newProduct);
});

const purchaseController = {
  purchaseProduct,
};

module.exports = purchaseController;
