const { Stock } = require("../models/models");

const create = async (stockProduct) => {
  const product = await Stock.create(stockProduct);
  return product;
};

const findAll = async (searchSettings) => {
  const product = await Stock.findAll(searchSettings);
  return product;
};

const findOne = async (searchSettings) => {
  const product = await Stock.findOne(searchSettings);
  return product;
};

const stockRepository = {
  create,
  findAll,
  findOne,
};

module.exports = stockRepository;
