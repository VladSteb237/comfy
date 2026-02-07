import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

const CartButton = () => {
  // temp
  const numItemsInCart = 9;
  return (
    <Button
      size="icon"
      variant={"outline"}
      asChild
      className="flex items-center justify-center relative gap-2">
      <Link href={"/cart"}>
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs dark:text-black">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
