import React from "react";
import { ReviewModel } from "../../models/ReviewModel";
import { Rating } from "@mui/material";
import "./Review.css";

export const Review = ({ review }: { review: ReviewModel }) => {
  return (
    <div className="flex items-center">
      <div className="text-gray-600">{review.createDate.toDateString()}</div>
      <div>{review.text}</div>
      <Rating value={review.rating} />
    </div>
  );
};
