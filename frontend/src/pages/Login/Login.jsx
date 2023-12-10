import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post("/loginData", { contactInfo, password });
      if (result.status === 200) {
        navigate("/");
      } else {
        console.log(result.status);
      }
    } catch (err) {
      window.alert(err.message);
    }
  };
  return (
    <div className="UpperLog">
      <div className="LoginBox">
        <div className="LoginTopPart">
          <h1 className="headingName">Qaisargram</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="LoginInpBox"
              name="contactInfo"
              placeholder="Mobile Number, username or Email"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
            <input
              type="text"
              className="LoginInpBox"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="LoginBtn SubmitBtn">
              Login
            </button>
            <hr />
            <div className="OrText">OR</div>
            <button className="LoginBtn">
              <i class="fa-brands fa-square-facebook FaceBookIcon"></i>
              <p>Login With Facebook</p>
            </button>
          </form>
        </div>
        <div className="LoginBottomPart">
          <p>
            Don't have an account?{" "}
            <Link to="/Register">
              <span>Sign up</span>
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

export default Login;
