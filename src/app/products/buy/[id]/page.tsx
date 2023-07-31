import { ProductItem } from "@/app/components";

async function getProductItem(id: string) {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products: any = await data.json();
  return products;
}

export default async function BuyProduct({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const productItemFetched = await getProductItem(params.id);

  return <ProductItem productDetails={productItemFetched} />;
}
