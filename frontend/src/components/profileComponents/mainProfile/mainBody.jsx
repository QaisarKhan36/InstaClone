import React, { useRef, useState } from "react";
import "./mainBody.css";
import UserBox from "./UserBox";
import UserSaved from "./userSaved";
import UserTagged from "./userTagged";

const MainBody = () => {
  //I used A simple method We could also use arrays to target the childs clicked etc.
  const refer = useRef();
  const [postdisp, setPostDisp] = useState(true);
  const [saveddisp, setSavedDisp] = useState(false);
  const [taggeddisp, setTaggedDisp] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      e.target.parentElement.classList.contains("optionbox") ||
      e.target.classList.contains("optionbox")
    ) {
      if (e.target.id === "one" || e.target.parentElement.id === "one") {
        setPostDisp(true);
        setSavedDisp(false);
        setTaggedDisp(false);
      } else if (e.target.id === "two" || e.target.parentElement.id === "two") {
        setPostDisp(false);
        setSavedDisp(true);
        setTaggedDisp(false);
      } else if (
        e.target.id === "three" ||
        e.target.parentElement.id === "three"
      ) {
        setPostDisp(false);
        setSavedDisp(false);
        setTaggedDisp(true);
      }
    }
  };
  return (
    <div className="mainOuter">
      <hr className="HrRow" />
      <div className="optionBar" ref={refer}>
        <div className="optionbox" id="one" onClick={(e) => handleClick(e)}>
          {postdisp && <span />}
          <i class="fa-solid fa-table-cells optionWidget"></i>
          <p>POST</p>
        </div>
        <div className="optionbox" id="two" onClick={(e) => handleClick(e)}>
          {saveddisp && <span />}
          <i class="fa-solid fa-bookmark optionWidget"></i>
          <p>Saved</p>
        </div>
        <div className="optionbox" id="three" onClick={(e) => handleClick(e)}>
          {taggeddisp && <span />}
          <i class="fa-solid fa-id-card-clip optionWidget"></i>
          <p>TAGGED</p>
        </div>
      </div>
      {postdisp && <UserBox />}
      {saveddisp && <UserSaved />}
      {taggeddisp && <UserTagged />}
    </div>
  );
};

export default MainBody;
