import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div>Feature Products </div>
    </>
  );
};

export default ProductLayout;
