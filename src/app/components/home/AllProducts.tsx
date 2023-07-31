import Link from "next/link";
type FetchedData = {
  results: any[];
  fetched: boolean;
};

async function fetchProducts(): Promise<FetchedData> {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    return {
      results: products,
      fetched: true,
    };
  } catch (error) {
    return {
      results: [],
      fetched: false,
    };
  }
}

export default async function AllProducts() {
  const data: FetchedData = await fetchProducts();
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-center w-[13rem] text-[33px] text-[#93899e] mt-8 font-bold">
        Best Seller Products
      </h1>
      {data.fetched ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.results.map((product) => {
            return (
              <Link href={`/products/${product.id}`} className="p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover h-[33rem] lg:h-[23rem] w-full rounded-[9px]"
                />
                <p className="mt-5" style={{ color: "#c9c9c9" }}>
                  {product.title}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#8c8c8c] mt-3">
                    Ratings: {product.rating.rate}/5{" "}
                    <span>({product.rating.count})</span>
                  </p>
                  <p>&#8377; {product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h1>
          An Unexpected Error Occured While Fetching Products. Please Try Again
        </h1>
      )}
    </div>
  );
}
