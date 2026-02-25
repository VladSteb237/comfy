import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavoriteToggleButton from "./FavoriteToggleButton";
import ReadMore from "./ReadMore";
import { fetchAllProducts } from "@/lib/actions";

interface ProductsListProps {
  products: Awaited<ReturnType<typeof fetchAllProducts>>;
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <React.Fragment>
      <div className="mt-12 grid gap-y-8">
        {products.map((product) => {
          const { name, price, image, company, description } = product;
          const dollarsAmount = formatCurrency(price);
          const productId = product.id;

          return (
            <article key={productId} className="relative">
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4 gap-y-4 grid md:grid-cols-3">
                  <Link
                    href={`/products/${productId}`}
                    className="relative h-64  md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      priority
                      className="w-full rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>

                  <div>
                    <Link href={`/products/${productId}`}>
                      <h2 className="text-xl font-semibold capitalize">
                        {name}
                      </h2>
                      <h4 className="text-muted-foreground">{company}</h4>
                      <p className="text-muted-foreground text-lg md:ml-auto">
                        {dollarsAmount}
                      </p>
                    </Link>
                  </div>
                  <ReadMore description={description} />
                </CardContent>
              </Card>
              <div className="absolute bottom-8 right-8 z-5">
                <FavoriteToggleButton productId={productId} />
              </div>
            </article>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ProductsList;
