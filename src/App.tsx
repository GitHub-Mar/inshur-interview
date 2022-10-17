import React, { useEffect, useState } from "react";
import { ReviewModel } from "./models/ReviewModel";
import { UserModel } from "./models/UserModel";
import { Reviews } from "./components/reviews/Reviews";
import axios from "axios";
import "./App.css";
import eric from "./eric.png";

function App() {
  const userId: number = 1;
  const [user, setUser] = useState<UserModel>();
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    async function fetchUser(userId: number) {
      const { data } = await axios.get(`/user/${userId}`);
      setUser(data);
    }
    fetchUser(userId);
  }, [userId]);

  return (
    <div className="App bg-cyan-500">
      <div className="profile">
        <div className="row">
          <img
            className="profile-picture"
            src={eric}
            alt="Profile photo"
            height={150}
            width={150}
          />
          <h3>
            {user?.firstName} {user?.lastName}
          </h3>
        </div>
        <h3>Job Title: Senior Software Engineer</h3>
        <h3>Favourite food: Sushi</h3>
        <Reviews userId={userId} />
      </div>
    </div>
  );
}

export default App;
