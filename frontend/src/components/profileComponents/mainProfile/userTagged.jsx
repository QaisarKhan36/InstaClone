import React from "react";
import { UserTaggedData } from "../../../Apis/userTaggedData";
import "./UserBox.css";

const UserTagged = () => {
  return (
    <div className="userPostsTop">
      <div>
        {UserTaggedData.map((postData) =>
          postData.type === "video" ? (
            <div className="PostsContainer">
              <div className="postCover">
                <div className="postCoverItems">
                  <i class="fa-solid fa-heart postCoverIcon"></i>
                  {postData.likesCount}
                  <i class="fa-solid fa-comment"></i>
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
            <div className="PostsContainer">
              <div className="postCover">
                <div className="postCoverItems">
                  <i class="fa-solid fa-heart"></i>
                  {postData.likesCount}
                  <i class="fa-solid fa-comment"></i>
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

export default UserTagged;
