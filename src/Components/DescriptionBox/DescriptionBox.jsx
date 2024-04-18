import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to Shopper, your one-stop destination for all your shopping
          needs! Explore our vast collection of high-quality products curated to
          enhance your lifestyle. Discover the latest trends in fashion, from
          chic apparel to stylish accessories that will elevate your wardrobe
          effortlessly. Whether you're seeking timeless classics or bold
          statement pieces, we have something for every taste and occasion.
          Indulge in our selection of premium beauty and skincare products,
          carefully selected to pamper and rejuvenate your skin. From luxurious
          creams to revitalizing serums, achieve a radiant complexion that glows
          from within.
        </p>
        <p>
          Transform your living space into a sanctuary of comfort and style with
          our home decor essentials. From elegant furnishings to charming
          accents, infuse personality into every room and create a space you'll
          love coming home to. Browse through our tech gadgets and accessories
          designed to simplify your life and keep you connected. Stay ahead of
          the curve with the latest innovations in electronics, ensuring you're
          always equipped for whatever the future holds.
        </p>
      </div>
    </div>
  );
};
