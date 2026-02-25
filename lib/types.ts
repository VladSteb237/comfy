//import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";

export type actionFunction = (
  prevState: any,
  formData: FormData,
) => Promise<{ message: string }>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

type CartItemWithProductQuery = {
  include: { product: true };
};

export type CartItemWithProduct =
  Awaited<
    ReturnType<typeof db.cartItem.findFirst<CartItemWithProductQuery>>
  > extends infer T
    ? NonNullable<T>
    : never;

// export type CartItemWithProduct = Prisma.CartItemGetPayload<{
//   include: { product: true };
// }>;
