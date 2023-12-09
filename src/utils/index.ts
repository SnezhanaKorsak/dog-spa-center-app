import { PetProduct } from "@/types";
import { ProductsCategory } from "@/constants";

export const getProductsByCategory = (
  products: PetProduct[],
  category: ProductsCategory,
): PetProduct[] => {
  return products.filter((product) => product.category === category);
};
