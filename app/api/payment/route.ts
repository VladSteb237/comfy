import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const POST = async (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  const origin = requestHeaders.get("origin");
  const { orderId, cartId } = await req.json();

  const order = await db.order.findUnique({
    where: {
      id: orderId,
    },
  });

  const cart = await db.cart.findUnique({
    where: {
      id: cartId,
    },
    include: {
      cartItems: {
        include: {
          product: true,
        },
      },
    }, // Cast to CartWithProducts to satisfy the type
  });
  if (!order || !cart) {
    return Response.json(null, {
      status: 404,
      statusText: "Order not found",
    });
  }
  type CartItemWithProduct = (typeof cart.cartItems)[number];

  const line_items = cart.cartItems.map((item: CartItemWithProduct) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.product.name,
          images: [item.product.image],
        },
        unit_amount: item.product.price * 100,
      },
      quantity: item.amount,
    };
  });
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      ui_mode: "embedded",
      metadata: {
        orderId: order.id,
        cartId: cart.id,
      },
      payment_method_types: ["card"],
      line_items: line_items,

      //success_url: `${origin}/checkout/success?orderId=${order.id}`,
      //cancel_url: `${origin}/checkout?canceled=true`,
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
    });
    return Response.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.log(error);
    return Response.json(null, {
      status: 500,
      statusText: "Something went wrong",
    });
  }
};
