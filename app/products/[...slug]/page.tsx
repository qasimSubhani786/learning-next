import React from "react";

interface ProductProps {
  params: { slug: string[] };
}

const ProductDetails = ({ params: { slug } }: ProductProps) => {
  return <div>ProductDetails {slug} </div>;
};

export default ProductDetails;
