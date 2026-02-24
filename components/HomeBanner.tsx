"use client";

import { useSearchParams } from "next/navigation";

const HomeBanner = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (!error) return null;

  let message = "";
  if (error === "forbidden") message = "Only admins can access this page.";
  if (error === "unauthorized") message = "Please sign in first.";

  return (
    <div className="w-full bg-red-500 text-white p-4 text-center font-semibold rounded-md mb-4">
      {message}
    </div>
  );
};

export default HomeBanner;
