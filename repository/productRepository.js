const { Product } = require("../models/models");

const create = async (newProduct) => {
  const product = await Product.create(newProduct);
  return product;
};

const findAll = async (searchSettings) => {
  const product = await Product.findAll({
    where: searchSettings,
  });
  return product;
};

const findOne = async (searchSettings) => {
  const product = await Product.findOne({
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
