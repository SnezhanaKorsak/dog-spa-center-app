import { WelcomeBanner } from "@/components/welcome-banner";
import { CurrentSpaOffer } from "@/components/current-spa-offer";
import { Products } from "@/components/products";

import { getClient } from "@/lib/client";
import { productsQuery } from "@/lib/graphql/queries";
import { getProductsByCategory } from "@/utils";
import { ProductsCategory } from "@/constants";
import { PetProduct } from "@/types";

export const revalidate = 3600;

const HomePage = async () => {
  const { data }: { data: { getPetProducts: PetProduct[] } } =
    await getClient().query({ query: productsQuery });

  const { getPetProducts: products } = data;
  const dogCollarsProducts = getProductsByCategory(
    products,
    ProductsCategory.DogCollars,
  );
  const petCarriersProducts = getProductsByCategory(
    products,
    ProductsCategory.PetCarriers,
  );

  return (
    <main>
      <WelcomeBanner />
      <CurrentSpaOffer />
      <Products title="Dog Collars" products={dogCollarsProducts} />
      <Products title="Animal Carry Ons" products={petCarriersProducts} />
    </main>
  );
};

export default HomePage;
