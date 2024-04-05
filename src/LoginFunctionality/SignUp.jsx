import React from "react";
import "./signup.css";
import { Navbar } from "../HomePage/Navbar";
import googleImg from "../Media/google-logo-removebg-preview.png";
import { auth,provider } from "./Google";

function SignUp() {
  const handleGoogleLogin = ()=>{
    auth.signInWithPopup(provider).catch(alert)
  }
  return (
    <>
      <div className="nav-main">
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <div className="signup-page">
        <div className="new-user-form">
          <h3>CREATE YOUR ACCOUNT</h3>
          <div className="users-input">
            <div className="name-inputs">
              <div className="select-options">
                <select>
                  <option value="mr" selected>
                    Mr
                  </option>
                  <option value="ms">Ms</option>
                </select>
              </div>
              <div className="name">
                <label>First Name:</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="name">
                <label>Last Name:</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="other-fields">
              <div>
                <label>Mobile No:</label>
                <input type="number" placeholder="Mobile no." />
              </div>

              <div>
                <label>Email:</label>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" placeholder="Password" />
              </div>
              <div style={{ marginTop: "12px" }} className="confirm-password-input">
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>
          </div>
          <div className="register-btn">
            <button>REGISTER</button>
          </div>
        </div>
        <div className="login-form">
          <div className="users-input">
            <h3>Log in to your Account</h3>

            <h6>Registered Customers</h6>
            <p>If you have an account with us, please log in.</p>
            <div>
              <label>Email:</label>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="login-btn-div">
              <button>Login</button>
              <span>Forgot Your Password?</span>
            </div>
            <div className="login-with-social-platform">
              <button className="fb-btn">
                <a href="https://www.facebook.com">
                <span>
                  <i class="fa-brands fa-square-facebook"></i>
                </span>
                Login With Facebook</a>
              </button>
              <button className="google-btn" onClick={handleGoogleLogin}>
              <img className="google-img" src={googleImg} alt="" />
                 Login With Google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { SignUp };
