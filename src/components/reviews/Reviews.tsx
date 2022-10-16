import React from "react";
import { Review } from "./Review";
import { ReviewModel } from "../../models/ReviewModel";

export const Reviews = ({ reviews }: { reviews: ReviewModel[] }) => {
  return (
    <>
      <h3>What some people have said...</h3>
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </>
  );
};
