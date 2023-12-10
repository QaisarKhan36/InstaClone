import React from "react";
import "./midBox.css";
import CarouselTop from "./Carouseltop/carouselTop";
import MainCards from "./mainCards/mainCards";

const MidBox = () => {
  return (
    <div className="MidTopBox">
      <CarouselTop />
      <MainCards />
    </div>
  );
};

export default MidBox;
