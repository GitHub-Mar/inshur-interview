import "./User.css";
import { useUser } from "../../hooks/useUser";

export const User = ({ id }: { id: number }) => {
  const [loading, user] = useUser(id);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          <div className="user-property">
            Name: {user?.firstName} {user?.lastName}
          </div>
          <div className="user-property">Title: {user?.jobTitle}</div>
          <div className="user-property">
            Favourite food: {user?.favouriteFood}
          </div>
        </div>
      </div>
    </div>
  );
};
