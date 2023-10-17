const asyncHandler = require("express-async-handler");
const stockRepository = require("../repository/temp2");
//111

const purchaseProduct = asyncHandler(async (req, res) => {
  const products = req.body;
  // оплата по смарт-контракту (пока не описана)
  // добавление товаров
  if (!!products.length && products.length > 0) {
    products.forEach(async (el) => {
      const foundProduct = await stockRepository.findOne({
        where: { productId: el.productId },
      });
      if (foundProduct !== null) {
        foundProduct.set({
          quantity: foundProduct.quantity + el.quantity,
        });
        await foundProduct.save();
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
