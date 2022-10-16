import React, { useEffect, useState } from "react";
import { ReviewModel } from "./models/ReviewModel";
import { UserModel } from "./models/UserModel";
import { Reviews } from "./components/reviews/Reviews";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const userId: number = 1;
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    async function fetchReviews(userId: number) {
      const { data } = await axios.get(
        `http://localhost:4000/reviews/${userId}`
      );
      setReviews(data);
    }
    fetchReviews(userId);
  });

  useEffect(() => {
    async function fetchUser(userId: number) {
      const { data } = await axios.get(`http://localhost:4000/user/${userId}`);
      setUser(data);
    }
    fetchUser(userId);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Interview presentation</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My profile
        </a>
        <h3>
          {user?.firstName} {user?.lastName}
        </h3>
      </header>
      <Reviews reviews={reviews} />
    </div>
  );
}

export default App;
