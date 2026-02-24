"use client";
import { CardSubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { toggleFavoriteAction } from "@/lib/actions";
import { usePathname } from "next/navigation";

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null;
};

const FavoriteToggleForm = (props: FavoriteToggleFormProps) => {
  const { productId, favoriteId } = props;
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
