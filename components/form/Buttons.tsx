"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { SignInButton } from "@clerk/nextjs";
import { deleteReviewAction, removeCartItemAction } from "@/lib/actions";
import FormContainer from "./FormContainer";
import IconButton from "./IconButton";
import { toast } from "sonner";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

const SubmitButtons = (props: SubmitButtonProps) => {
  const { className = "", text = "submit", size = "lg" } = props;
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      size={size}
      className={cn("capitalize", className)}>
      {pending ? (
        <React.Fragment>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </React.Fragment>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButtons;

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size={"icon"}
      variant={"outline"}
      className=" p-2 cursor-pointer">
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};

export const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <span onClick={() => toast.success("Review deleted Successfully!!")}>
        <IconButton actionType="delete" />
      </span>
    </FormContainer>
  );
};

export const ProductSignInButton = () => {
  return (
    <span onClick={() => toast.success("Product SignIn Successful!!")}>
      <SignInButton mode="modal">
        <Button type="button" size={"default"} className="mt-8">
          Please Sign In
        </Button>
      </SignInButton>
    </span>
  );
};

export const DeleteItemCart = (props: SubmitButtonProps) => {
  const { className = "", text = "submit", size = "lg" } = props;
  const { pending } = useFormStatus();

  return (
    <span
      onClick={() =>
        toast.success("Item Deleted from the Cart Successfully!!")
      }>
      <Button
        type="submit"
        disabled={pending}
        size={size}
        className={cn("capitalize", className)}>
        {pending ? (
          <React.Fragment>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait...
          </React.Fragment>
        ) : (
          text
        )}
      </Button>
    </span>
  );
};
