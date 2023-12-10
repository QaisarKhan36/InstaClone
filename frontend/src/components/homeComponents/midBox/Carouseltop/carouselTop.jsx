import React, { useState, useRef, useEffect } from "react";
import "./carouselTop.css";
import axios from "axios";

const CarouselTop = () => {
  const Childscheck = useRef();
  const [Elem, setElem] = useState(0);
  const [ChildMe, setChildMe] = useState(0); // Initialize with 0
  const [usersData, setUsersData] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/userData");
      setUsersData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Trigger fetch on mount

  useEffect(() => {
    if (usersData.length > 0) {
      let childs = -1 + (Childscheck.current.childElementCount - 2) / 6;
      setChildMe(childs);
    }
  }, [usersData]); // Update ChildMe when usersData changes

  const BackMe = () => {
    let Added = Elem >= 0 ? Number(Elem) + 346 : 0;
    setElem(Added);
  };

  const forwardMe = () => {
    let Added =
      Number(Elem) > -346 * ChildMe ? Number(Elem) - 346 : Number(Elem);
    setElem(Added);
  };

  console.log(Elem);

  let StyleMe = Elem >= 0 ? { display: "none" } : { display: "inline-block" };
  let SecondMe =
    Number(Elem) >= -346 * ChildMe
      ? { display: "inline-block" }
      : { display: "none" };

  const styles = { transform: `translateX(${Elem}px)` };

  return (
    <div className="CarouselTopBox" ref={Childscheck}>
      {usersData.map((user, index) => (
        <div key={index} className="CircleTop" style={styles}>
          <img src={user.photo} alt="" className="storyProfImg" />
          <p className="storyProfName">
            {user.name.length < 9 ? user.name : user.name.slice(0, 9) + "..."}
          </p>
        </div>
      ))}

      <button className="btnLeftScroll" style={StyleMe}>
        <i className="fa-solid fa-chevron-left" onClick={BackMe}></i>
      </button>
      {ChildMe > 0 && (
        <button className="btnRightScroll" onClick={forwardMe} style={SecondMe}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
};

export default CarouselTop;
