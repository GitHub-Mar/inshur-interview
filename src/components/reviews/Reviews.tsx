import React, { useState, useEffect } from "react";
import axios from "axios";
import { Review } from "./Review";
import { ReviewModel } from "../../models/ReviewModel";

export const Reviews = ({ userId }: { userId: number }) => {
  const [reviews, setReviews] = useState<ReviewModel[]>([]);

  useEffect(() => {
    async function fetchReviews(userId: number) {
      const { data } = await axios.get(`/reviews/userId/${userId}`);
      setReviews(data);
    }
    fetchReviews(userId);
  }, [userId]);

  return (
    <>
      <h3>What others have said</h3>
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </>
  );
};
