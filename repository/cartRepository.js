const { AddedProduct, Product } = require("../models/models");

const create = async (newProduct) => {
  const product = await AddedProduct.create(newProduct);
  return product;
};

const findAll = async (searchSettings) => {
  const product = await AddedProduct.findAll({
    where: searchSettings,
    include: [Product]
  });
  return product;
};

const findOne = async (searchSettings) => {
  const product = await AddedProduct.findOne({
    where: searchSettings,
  });
  return product;
};

const _delete = async (searchSettings) => {
  const product = await AddedProduct.destroy({ where: searchSettings });
  return product;
};

const stockRepository = {
  create,
  findAll,
  findOne,
  delete: _delete,
};

module.exports = stockRepository;
