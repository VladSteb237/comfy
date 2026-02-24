import { fetchFeaturedProducts } from "@/lib/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "@/app/products/ProductsGrid";

export const runtime = "nodejs";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) {
    return <EmptyList />;
  }
  return (
    <section className="pt-24">
      <SectionTitle title="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
};

export default FeaturedProducts;
