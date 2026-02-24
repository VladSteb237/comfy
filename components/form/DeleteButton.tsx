"use client";
import { deleteProductAction } from "@/lib/actions";
import FormContainer from "./FormContainer";
import IconButton from "./IconButton";
import { toast } from "sonner";

const DeleteButton = ({ productId }: { productId: string }) => {
  return (
    <FormContainer
      action={async () => {
        const { message, error } = await deleteProductAction({ productId });
        if (message) {
          toast.success(message);
          return { message };
        }
        if (error) {
          toast.error(error);
        }
        return { message: "" };
      }}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default DeleteButton;
