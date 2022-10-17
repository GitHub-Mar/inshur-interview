import { useState } from "react";
import { Reviews } from "./components/reviews/Reviews";
import { User } from "./components/user/User";
import "./App.css";

function App() {
  const userId: number = 1;
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div className="App">
      <User id={userId} />
      <button
        className="review-toggle-button"
        onClick={() => setShowReviews(!showReviews)}
      >
        {`${showReviews ? "Hide" : "Show"} some reviews`}
      </button>
      {showReviews && <Reviews userId={userId} />}
    </div>
  );
}

export default App;
