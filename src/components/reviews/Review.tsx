import React from "react";
import { ReviewModel } from "../../models/ReviewModel";

export const Review = ({ review }: { review: ReviewModel }) => {
  return (
    <div>
      <div>{review.text}</div>
      <div>Created: {review.createDate}</div>
      <div>{review.text}</div>
    </div>
  );
};
