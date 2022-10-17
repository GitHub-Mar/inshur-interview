import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserModel } from "../../models/UserModel";
import "./User.css";
import { useGetById } from "../../hooks/useReviews";

export const User = ({ id }: { id: number }) => {
  const [user, setUser] = useState<UserModel>();

  const { loading, data } = useGetById("/user/", id);

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
        <div className="text-block">
          <div>
            Name: {user?.firstName} {user?.lastName}
          </div>
          <div>Title: {user?.jobTitle}</div>
          <div>Favourite food: {user?.favouriteFood}</div>
        </div>
      </div>
    </div>
  );
};
