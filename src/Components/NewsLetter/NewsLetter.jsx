import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email </h1>
      <p>Subscribe to our news letter and stay updated</p>
      <div>
        <input type="email" name="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
