import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserModel } from "../../models/UserModel";
import { FavouriteFood } from "./FavouriteFood";
import "./User.css";

export const User = ({ id }: { id: number }) => {
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    async function fetchUser(userId: number) {
      const { data } = await axios.get(`/user/${userId}`);
      setUser(data);
    }
    fetchUser(id);
  }, [id]);

  return (
    <div className="profile">
      <div className="user-info">
        <img
          className="profile-picture"
          src={"assets/eric.png"}
          alt="Profile photo"
          height={150}
          width={150}
        />
        <div>
          <div>
            {user?.firstName} {user?.lastName}
          </div>
          <div>Senior Software Engineer</div>
        </div>
      </div>
      <div className="job-title"></div>
      <FavouriteFood />
    </div>
  );
};
