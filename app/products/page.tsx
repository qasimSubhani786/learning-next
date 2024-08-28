import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <>
      <Link href="/"> Home </Link>
      <h1>Products List</h1>
      <h2>
        <Link replace href={`products/1`}>
          Product 1
        </Link>
      </h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  );
};

export default Products;
