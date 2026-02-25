import SectionTitle from "@/components/global/SectionTitle";
import { fetchUserFavorites, UserFavoriteType } from "@/lib/actions";
import ProductsGrid from "../products/ProductsGrid";

export const metadata = {
  title: "Comfy Favorites",
  description: "A nifty store built with Next.js",
};

const FavoritesPage = async () => {
  const favorites: UserFavoriteType[] = await fetchUserFavorites();
  if (favorites.length === 0) {
    return <SectionTitle title="You have no favorites yet." />;
  }

  return (
    <div>
      <SectionTitle title="Favorites" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
};

export default FavoritesPage;
