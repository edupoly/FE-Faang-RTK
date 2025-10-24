import React from "react";
import { useGetProductsQuery } from "./services/productsService";

function Products() {
  const { isLoading, data } = useGetProductsQuery();
  return (
    <div className="m-3 p-3 border border-3 border-success">
      <h1>Products</h1>
      <h3>{isLoading && <b>Loading....</b>}</h3>
      {!isLoading && (
        <ul>
          {data.map((product) => {
            return <li>{product.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Products;
