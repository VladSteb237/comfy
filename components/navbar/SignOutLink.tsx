"use client";
import { SignOutButton as ClerkSignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignOutLink() {
  const router = useRouter();

  const handleSignOut = () => {
    toast.success("Signed out successfully");
    router.push("/"); // редирект после logout
  };

  return (
    <ClerkSignOutButton>
      {/* Clerk автоматически оборачивает кнопку */}
      <button onClick={handleSignOut} className="w-full text-left">
        Logout
      </button>
    </ClerkSignOutButton>
  );
}
