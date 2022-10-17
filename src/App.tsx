import React, { useEffect, useState } from "react";
import { ReviewModel } from "./models/ReviewModel";
import { UserModel } from "./models/UserModel";
import { Reviews } from "./components/reviews/Reviews";
import axios from "axios";
import "./App.css";
import { userData } from "./data/user";
import { reviewData } from "./data/reviews";
import eric from "./eric.png";

function App() {
  const userId: number = 1;
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    async function fetchReviews(userId: number) {
      const { data } = await axios.get(`/reviews/userId/${userId}`);
      setReviews(data);
    }
    fetchReviews(userId);
  }, [userId]);

  useEffect(() => {
    async function fetchUser(userId: number) {
      const { data } = await axios.get(`/user/${userId}`);
      setUser(data);
    }
    fetchUser(userId);
  }, [userId]);

  return (
    <div className="App">
      <div className="profile">
        <div className="profile-picture">
          <img src={eric} alt="Profile photo" height={300} width={300} />
        </div>
        <h3>
          Name: {user?.firstName} {user?.lastName}
        </h3>
        <h3>Job Title: Senior Software Engineer</h3>
        <h3>Favourite food: Sushi</h3>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
