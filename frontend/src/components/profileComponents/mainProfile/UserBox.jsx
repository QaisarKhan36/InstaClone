import React, { useEffect, useState } from "react";
import "./UserBox.css";
import axios from "axios";

const UserBox = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/userPost");
      setUserData(res.data);
    } catch (err) {
      console.log("fetchData error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="userPostsTop">
      <div>
        {userData.map((postData) =>
          postData.type === "video" ? (
            <div className="PostsContainer" key={postData.id}>
              <div className="postCover">
                <div className="postCoverItems">
                  <i className="fa-solid fa-heart postCoverIcon"></i>
                  {postData.likesCount}
                  <i className="fa-solid fa-comment"></i>
                  {postData.commentCount}
                </div>
              </div>
              <video
                src={postData.postLink}
                alt="videoNotShown"
                className="userPost"
              />
            </div>
          ) : (
            <div className="PostsContainer" key={postData.id}>
              <div className="postCover">
                <div className="postCoverItems">
                  <i className="fa-solid fa-heart"></i>
                  {postData.likesCount}
                  <i className="fa-solid fa-comment"></i>
                  {postData.commentCount}
                </div>
              </div>
              <img
                src={postData.postLink}
                alt="postNotShown"
                className="userPost"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UserBox;
