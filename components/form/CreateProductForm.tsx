"use client";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createProductAction } from "@/lib/actions";

const initialState = { message: "", error: "" };

export default function CreateProductForm({ children }: any) {
  const [state, formAction] = useActionState(createProductAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      router.push("/admin/products");
    }

    if (state.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  return <form action={formAction}>{children}</form>;
}
