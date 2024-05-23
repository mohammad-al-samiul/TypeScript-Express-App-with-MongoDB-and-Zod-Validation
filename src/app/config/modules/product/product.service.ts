import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find({});
  return result;
};

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
};
