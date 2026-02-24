"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}

export default function HomeToast() {
  const router = useRouter();

  useEffect(() => {
    const toastType = getCookie("toast");

    if (!toastType) return;

    if (toastType === "forbidden") {
      toast.error("Only admin can access this page.");
    }

    if (toastType === "unauthorized") {
      toast.error("Please sign in first.");
    }

    // Удаляем cookie
    document.cookie = "toast=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    // Обновляем страницу, чтобы toast точно показался
    router.refresh();
  }, [router]);

  return null;
}
