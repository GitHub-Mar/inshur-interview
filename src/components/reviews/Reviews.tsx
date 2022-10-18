import { Review } from "./Review";
import { useReviews } from "../../hooks/useReviews";

export const Reviews = ({ userId }: { userId: number }) => {
  const [loading, reviews] = useReviews(userId);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="review-container">
      <h4>What others have said</h4>
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
};
