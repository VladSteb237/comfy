import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/lib/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Comfy Cart",
  description: "A nifty store built with Next.js",
};

const CartPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
  const previousCart = await fetchOrCreateCart({ userId });
  const { cartItems, currentCart } = await updateCart(previousCart);
  if (cartItems.length === 0) {
    return <SectionTitle title="Your cart is empty!" />;
  }
  return (
    <React.Fragment>
      <SectionTitle title="Your Shopping Cart..." />
      <div className="mt-8 grig gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPage;
