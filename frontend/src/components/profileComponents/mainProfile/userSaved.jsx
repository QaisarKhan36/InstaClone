import React, { useState, useEffect } from "react";
import "./userSaved.css";
// import { UserSavedData } from "../../../Apis/userSavedData";
import axios from "axios";

const UserSaved = () => {
  const [savedData, setSavedData] = useState([]);

  const fetchSavedData = async () => {
    try {
      const res = await axios.get("/userSavedData");
      console.log(res.data);
      setSavedData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSavedData();
  }, []);

  return (
    <div className="UpperCollectionBox">
      <div className="topCollectionBar">
        <p className="leftText">Only you can see what you've saved</p>
        <span>
          <i class="fa-solid fa-plus"></i>
          <p>New Collection</p>
        </span>
      </div>
      <div className="collectionTopBox">
        {savedData.map((data) => (
          <div className="savedpostTop" key={data.id}>
            <img src={data.collectionLink} alt="CollectionNot shown" />
            <p>{data.collectionName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSaved;
