import { formatCurrency } from "@/lib/format";
import React from "react";
import { Prisma } from "@prisma/client";
import { Separator } from "../ui/separator";
import { Card, CardTitle } from "../ui/card";
import FormContainer from "../form/FormContainer";
import { createOrderAction } from "@/lib/actions";
import SubmitButton from "../form/Buttons";

type CartWithProducts = Prisma.CartGetPayload<{
  include: { cartItems: { include: { product: true } } };
}>;

interface CartTotalsProps {
  cart: CartWithProducts;
}

const CartTotals = ({ cart }: CartTotalsProps) => {
  const { cartTotal, shipping, orderTotal, tax } = cart;
  return (
    <div>
      <Card className="p-8">
        <CartTotalsRow label="Subtotal" amount={cartTotal} />
        <CartTotalsRow label="Shipping" amount={shipping} />
        <CartTotalsRow label="Tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalsRow label="Order Total" amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="Place Order" className="w-fit mt-8" />
      </FormContainer>
    </div>
  );
};

function CartTotalsRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <React.Fragment>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-bold">{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </React.Fragment>
  );
}

export default CartTotals;
