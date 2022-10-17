import React from "react";
import { ReviewModel } from "../../models/ReviewModel";
import { Rating } from "@mui/material";
import "./Review.css";

export const Review = ({ review }: { review: ReviewModel }) => {
  return (
    <div className="review-container">
      <div className="review-date">
        {new Date(review.createDate).toDateString()}
      </div>
      <div>{review.text}</div>
      <Rating value={review.rating} />
    </div>
  );
};
