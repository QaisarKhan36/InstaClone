import React from "react";
import "./profile.css";
import LeftBox from "../../components/homeComponents/leftBox/leftBox";
import MainProfile from "../../components/profileComponents/mainProfile/mainProfile";

const Profile = () => {
  return (
    <div className="ProfileBox">
      <LeftBox />
      <MainProfile />
    </div>
  );
};

export default Profile;
