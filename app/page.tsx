import FeaturedProducts from "@/components/form/FeaturedProducts";
import Hero from "@/components/form/Hero";
import React, { Suspense } from "react";
import LoadingContainer from "@/components/global/LoadingContainer";
import AppleBanner from "@/components/AppleBanner";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string }>;
}) {
  const error = (await searchParams)?.error;
  return (
    <React.Fragment>
      {error === "forbidden" && (
        <AppleBanner message="Only admins can access this page!" />
      )}
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </React.Fragment>
  );
}
