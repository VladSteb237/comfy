import { fetchProductRating } from "@/lib/actions";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductRating = async ({ productId }: { productId: string }) => {
  //const rating = 4.2;
  //const count = 25;
  const { rating, count } = await fetchProductRating(productId);
  const countValue = `(${count}) reviews`;
  return (
    <span className="flex gap-1 items-center text-md mt-1 mb-4">
      <FaStar className="w-3 h-3" />
      {rating}
      {countValue}
    </span>
  );
};

export default ProductRating;
