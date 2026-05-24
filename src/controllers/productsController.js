import { Product } from '../db/Product.js';
import createHttpError from 'http-errors';

export const getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
};

export const getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    if (!product) {
      throw createHttpError(404, 'Product not found');
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
