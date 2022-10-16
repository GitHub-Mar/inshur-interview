import React from "react";
import { ReviewModel } from "../../models/ReviewModel";
import "./Review.css";

export const Review = ({ review }: { review: ReviewModel }) => {
  return (
    <div className="review-container">
      <div>{review.text}</div>
      <div>Created: {review.createDate.toDateString()}</div>
      <div>{review.rating}</div>
    </div>
  );
};
