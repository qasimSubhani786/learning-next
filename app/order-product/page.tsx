"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  return (
    <>
      <div>OrderProduct</div>
      <button
        className="btn"
        onClick={() => {
          console.log("Placing Your Order");
          router.push("/");
        }}
      >
        Place Order{" "}
      </button>
    </>
  );
};

export default OrderProduct;
