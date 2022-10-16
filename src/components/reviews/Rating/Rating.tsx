import React from "react";

export const Rating = ({ rating }: { rating: number }) => {
  const totalStars = 5;

  return (
    <div>
      {[
        ...new Array(totalStars).map((star, index) => {
          return index < rating ? (
            <img></img>
          ) : (
            <a href="https://www.flaticon.com/free-icons/star"></a>
          );
        }),
      ]}
    </div>
  );
};
