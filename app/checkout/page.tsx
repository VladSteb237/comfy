"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback } from "react";
import axios from "axios";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const cartId = searchParams.get("cartId");

  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post("/api/payment", {
      orderId,
      cartId,
    });
    return response.data.clientSecret;
  }, [orderId, cartId]);

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default CheckoutPage;
////////////////////////////////////////////////////////////////////////////////
// "use client";
// import { useSearchParams } from "next/navigation";
// import { loadStripe } from "@stripe/stripe-js";
// import { useCallback } from "react";
// import axios from "axios";
// import {
//   EmbeddedCheckoutProvider,
//   EmbeddedCheckout,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
// );

// const CheckoutPage = () => {
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get("orderId");
//   const cartId = searchParams.get("cartId");

//   const fetchClientSecret = useCallback(async () => {
//     // Create a Checkout Session
//     const response = await axios.post("/api/payment", {
//       orderId: orderId,
//       cartId: cartId,
//     });
//     return response.data.clientSecret;
//   }, []);

//   const options = { fetchClientSecret };

//   return (
//     <div id="checkout">
//       <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
//         <EmbeddedCheckout />
//       </EmbeddedCheckoutProvider>
//     </div>
//   );
// };

// export default CheckoutPage;
