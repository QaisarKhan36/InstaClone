import React from "react";
import "./leftBox.css";
import profImg from "../../../assets/QaisarImg.jpg";
import { Link } from "react-router-dom";

const LeftBox = () => {
  return (
    <div className="LeftTopBox">
      <h2 className="Logo">Qaisargram</h2>
      <div className="IconDiv">
        <div className="homeIcon options">
          <i className="fa-solid fa-house"></i>
          <span>
            <Link to="/" className = "link">
              Home
            </Link>
          </span>
        </div>
        <div className="SearchIcon options">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </div>
        <div className="ExploreIcon options">
          <i className="fa-regular fa-compass"></i>
          <span>Explore</span>
        </div>
        <div className="ReelsIcon options">
          <i className="fa-brands fa-youtube"></i>
          <span>Reels</span>
        </div>
        <div className="ReelsIcon options">
          <i className="fa-brands fa-facebook-messenger"></i>
          <span>Messages</span>
        </div>
        <div className="NotificationsIcon options">
          <i className="fa-regular fa-heart"></i>
          <span>Notifications</span>
        </div>
        <div className="CreateIcon options">
          <i className="fa-solid fa-plus"></i>
          <span>Create</span>
        </div>
        <div className="ProfileIcon options">
          <Link to="/profile" className="LinkTag">
            <img src={profImg} alt="profilepic" className="profleftImage" />
          </Link>
          <span>Profile</span>
        </div>
        <div className="MoreIcon options">
          <i className="fa-solid fa-bars"></i>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default LeftBox;
