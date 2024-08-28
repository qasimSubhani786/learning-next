import { notFound } from "next/navigation";
import React from "react";

const ReviewId = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }

  return (
    <div>
      Review {params.reviewId} of Product {params.productId}
    </div>
  );
};

export default ReviewId;
