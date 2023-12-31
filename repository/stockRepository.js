const { Stock, Product } = require("../models/models");

const create = async (stockProduct) => {
  const product = await Stock.create(stockProduct);
  return product;
};

const findAll = async (searchSettings) => {
  const product = await Stock.findAll({
    where: searchSettings,
    include: [Product],
  });
  return product;
};

const findOne = async (searchSettings) => {
  const product = await Stock.findOne({
    where: searchSettings,
  });
  return product;
};

const stockRepository = {
  create,
  findAll,
  findOne,
};

module.exports = stockRepository;
