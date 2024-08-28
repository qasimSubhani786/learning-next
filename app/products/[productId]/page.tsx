import React from "react";
type Props = { params: { productId: string } };

// Dynamic Meta Data Object
export const generateMetadata = ({ params }: Props) => {
  return {
    title: `Product ${params.productId}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  return <div>Product Details {params.productId} </div>;
};

export default ProductDetails;
