import SuccessBanner from "@/components/SuccessBanner";
import ProductsContainer from "./ProductsContainer";

export const metadata = {
  title: "Comfy Products",
  description: "A nifty store built with Next.js",
};

type SearchParams = {
  layout?: string;
  search?: string;
  success?: string;
};
const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const { layout = "grid", search = "" } = await searchParams;
  const success = (await searchParams)?.success;
  return (
    <>
      {success === "updated" && (
        <SuccessBanner message="Product updated successfully." />
      )}
      <ProductsContainer layout={layout} search={search} />
    </>
  );
};

export default ProductsPage;
