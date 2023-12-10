import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [contactInfo, setContactInfo] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/registerData", {
        contactInfo,
        userName,
        fullName,
        password,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="UpperReg">
      <div className="registerBox">
        <div className="registerTopPart">
          <h1 className="headingName">Qaisargram</h1>
          <p className="belowHeadingText">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="registersBtn">
            <i className="fa-brands fa-square-facebook FaceBookIcon"></i>
            <p>Login With Facebook</p>
          </button>
          <hr />
          <div className="OrText">OR</div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="contactInfo"
              className="registerInpBox"
              placeholder="Mobile Number or Email"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
            <input
              type="text"
              name="fullName"
              className="registerInpBox"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              name="userName"
              className="registerInpBox"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="registerInpBox"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="textBelowInputBox">
              People who use our service may have uploaded your contact
              information to Instagram.
              <span>Learn More</span>
            </p>
            <p className="textBelowInputBox">
              By signing up, you agree to our
              <span>Terms </span>
              <span>Privacy Policy </span>and
              <span>Cookies </span>
              <span>Policy</span>
            </p>
            <button type="submit" className="registersBtn SubmitBtn">
              Sign up
            </button>
          </form>
        </div>
        <div className="registerBottomPart">
          <p>
            Have an account?{" "}
            <Link to="/login">
              <span>Log in</span>
            </Link>
          </p>
        </div>
        <p className="getTheAppTitle">Get The App</p>
        <div className="downloadLinks">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt="GooglePlay Store"
          />
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt="Microsoft Store"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
