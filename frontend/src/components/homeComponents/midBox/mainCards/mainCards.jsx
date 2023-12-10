import React, { useEffect, useState } from "react";
import "./mainCards.css";
import axios from "axios";

const MainCards = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const postData = await axios.get("/postData");
      setPosts(postData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div className="cardsTop" key={post.postid}>
          <div className="cardhead">
            <div className="cardProfilehead">
              <img src={post.photo} alt="cardImg" className="cardProfImg" />
            </div>
            <p className="cardProfName">{post.name}</p>
            <p className="Dot">.</p>
            <p className="postTime">{post.id}</p>
            <i className="fa-solid fa-ellipsis OptionIcon"></i>
          </div>
          <div className="cardBody">
            <img src={post.postphoto} alt="ImgError" className="post" />
            <div className="bottomBox">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-comment"></i>
              <i className="fa-regular fa-paper-plane"></i>
              <i className="fa-regular fa-bookmark moveRight"></i>
            </div>
            <div>
              <p className="likePost">{post.likeCount} likes</p>
              <p className="postbottomname">
                <span>{post.name}</span> {post.description}
              </p>
              <p className="viewComments">
                view all {post.commentCount} comments
              </p>
              <p className="viewComments">Add a comment...</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCards;
