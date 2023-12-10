import React from "react";
import "./rightBox.css";
import profImg from "../../../assets/QaisarImg.jpg";
import { Users } from "../../../Apis/Users";
import { Link } from "react-router-dom";

const RightBox = () => {
  const firstFive = Users.slice(0, 5);
  return (
    <div className="RightTopBox">
      <div className="OuterBoxProfiles">
        <div className="profBox">
          <Link to="/profile">
            <img src={profImg} alt="profImg" className="profImg" />
          </Link>
          <p className="userNames">
            <span>q_a_i_s_a_r_</span>
            <br />
            Qaisar Khan
          </p>
          <Link href="/profile" className="changeProfLink">
            Switch
          </Link>
        </div>
        <div className="suggestionText">
          <p>Suggested For You</p>
          <Link href="/profile" className="seeAllLink">
            See All
          </Link>
        </div>
        {firstFive.map((user) => (
          <div className="profBox">
            <img src={user.photo} alt="profImg" className="profImg" />
            <p className="userNames">
              <span>{user.name}</span>
              <br />
              New To Instagram
            </p>
            <Link href="/profile" className="changeProfLink">
              follow
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBox;
