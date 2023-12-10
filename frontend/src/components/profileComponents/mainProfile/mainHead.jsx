import React, { useEffect, useState, useRef } from "react";
import "./mainHead.css";
import "../../../components/homeComponents/midBox/Carouseltop/carouselTop.css";
import profImg from "../../../assets/QaisarImg.jpg";
import axios from "axios";

const MainHead = () => {
  const Childscheck = useRef();
  const [highlight, setHighlight] = useState([]);
  const [Elem, setElem] = useState(0);
  const [ChildMe, setChildMe] = useState(0); // Initialize with 0
  const [personalData, setPersonalData] = useState([]);

  //fetchHighlights
  const fetchHighlights = async () => {
    try {
      const res = await axios.get("/userHighlight");
      setHighlight(res.data);
    } catch (err) {
      console.log("Internal Error", err);
    }
  };

  // fetchPersonalDatas
  const fetchPersonalData = async () => {
    try {
      const res = await axios.get("/userPersonalData");
      setPersonalData(...res.data);
    } catch (err) {
      console.log("Internal Error", err);
    }
  };

  //onPageLoad
  useEffect(() => {
    fetchHighlights();
    fetchPersonalData();
  }, []);

  //onhighlightBackbutton
  const BackMe = () => {
    const Added = Elem >= 0 ? Number(Elem) + 822 : 0;
    setElem(Added);
  };

  //onhighlightForwardbutton
  const forwardMe = () => {
    const Added =
      Number(Elem) > -822 * ChildMe ? Number(Elem) - 822 : Number(Elem);
    setElem(Added);
  };

  //variablesvaluesgiving
  const StyleMe = Elem >= 0 ? { display: "none" } : { display: "inline" };
  const SecondMe =
    Number(Elem) > -822 * ChildMe ? { display: "inline" } : { display: "none" };
  const styles = { transform: `translateX(${Elem}px)` };

  useEffect(() => {
    if (highlight.length > 0) {
      let childs = -1 + (Childscheck.current.childElementCount - 2) / 6;
      setChildMe(childs);
    }
  }, [highlight]); // Update ChildMe when highlight changes
  return (
    <div className="upperCover">
      <div className="upMain">
        <div className="profileImgBox">
          <img src={profImg} alt="profile" className="profileImage" />
        </div>
        <div className="profileDataBox">
          <div className="edit_viewbuttons">
            <p className="userName">{personalData.userName}</p>
            <button>Edit Profile</button>
            <button>View Archive</button>
            <i class="fa-solid fa-gear settingIcon"></i>
          </div>
          <div className="postDatas">
            <p>
              <span>{personalData.postCount}</span>posts
            </p>
            <p>
              <span>{personalData.followersCount}</span>followers
            </p>
            <p>
              <span>{personalData.followingCount}</span>followings
            </p>
          </div>
          <div className="userBio">
            <b>{personalData.name}</b>
            <br />
            <p>{personalData.Bio}</p>
          </div>
        </div>
      </div>
      <div className="HighlightsUpperBox">
        <div className="HighlightTopBox" ref={Childscheck}>
          {highlight.map((highlight) => (
            <div className="highlightTop" style={styles}>
              {highlight.type === "video" ? (
                <video
                  src={highlight.higlightLink}
                  className="highlightProfImg"
                />
              ) : (
                <img
                  src={highlight.higlightLink}
                  alt="highlightImg"
                  className="highlightProfImg"
                />
              )}
              <p className="highlightProfName">
                {highlight.higlightTagline.length < 9
                  ? highlight.higlightTagline
                  : highlight.higlightTagline.slice(0, 9) + "..."}
              </p>
            </div>
          ))}

          <button className="btnLeftScroll" style={StyleMe}>
            <i className="fa-solid fa-chevron-left" onClick={BackMe}></i>
          </button>
          <button
            className="btnRightScroll"
            onClick={forwardMe}
            style={SecondMe}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHead;
