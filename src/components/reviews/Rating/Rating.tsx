import React from "react";

export const Rating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <div>
      {[
        ...new Array(totalStars).map((star, index) => {
          return index < rating ? "1" : "0";
        }),
      ]}
    </div>
  );
};
