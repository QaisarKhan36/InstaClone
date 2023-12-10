import React from "react";
import "./home.css";
import LeftBox from "../../components/homeComponents/leftBox/leftBox";
import MidBox from "../../components/homeComponents/midBox/midBox";
import RightBox from "../../components/homeComponents/rightBox/rightBox";

const Home = () => {
  return (
    <div className="homebox">
      <LeftBox />
      <MidBox />
      <RightBox />
    </div>
  );
};

export default Home;
