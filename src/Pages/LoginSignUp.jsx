import React from "react";
import "./CSS/LoginSignUp.css"
export const LoginSignUp = () => {
  return (
    <div className="loginsingup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-fields">
          <input type="text" name="" id="" placeholder="Your name" />
          <input type="email" name="" id="" placeholder="Email Address" />
          <input type="password" name="" id="" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};
