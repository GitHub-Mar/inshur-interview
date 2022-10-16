import React, { useEffect, useState } from "react";
import { ReviewModel } from "./models/ReviewModel";
import { UserModel } from "./models/UserModel";
import { Reviews } from "./components/reviews/Reviews";
import axios from "axios";
import "./App.css";
import { userData } from "./data/user";
import { reviewData } from "./data/reviews";

function App() {
  const userId: number = 1;
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    async function fetchReviews(userId: number) {
      const data = reviewData;
      // const { data } = await axios.get(
      //   `http://localhost:4000/reviews/${userId}`
      // );
      setReviews(data);
    }
    fetchReviews(userId);
  });

  useEffect(() => {
    async function fetchUser(userId: number) {
      const data = userData;
      // const { data } = await axios.get(`http://localhost:4000/user/${userId}`);
      setUser(data);
    }
    fetchUser(userId);
  });

  return (
    <div className="App">
      <header className="App-header"></header>
      <h3>
        {user?.firstName} {user?.lastName}
      </h3>
      <h3>Senior Software Engineer</h3>
      <img src={"../public/ProfilePicture.jfif"} className="App-logo" />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default App;
