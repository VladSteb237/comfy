import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "../ui/button";

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        asChild
        type="button"
        size={"icon"}
        variant={"outline"}
        className="p-2 cursor-pointer">
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};
