import { CardSignInButton } from "@/components/form/CardSignInButton";
import { fetchFavoriteId, getAuthUser } from "@/lib/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleButton = async ({ productId }: { productId: string }) => {
  const user = await getAuthUser();
  const userId = user?.id;
  if (!userId) {
    return <CardSignInButton />;
  }
  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
};

export default FavoriteToggleButton;
