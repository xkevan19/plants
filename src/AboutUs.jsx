import React, { useEffect } from "react";
import "./AboutUs.css";
import { useDispatch } from "react-redux";
import { addItem } from "./CreateSlice";

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Get your green on!</p>
      <p className="about-us-content">
        At Plantos, we believe that everyone deserves a little bit of green in
        their lives. We're more than just a plant shop; we're a community of
        plant lovers dedicated to helping you cultivate your own urban jungle.
        We carefully curate our selection of plants, ensuring each one is
        healthy and thriving. Whether you're a seasoned gardener or just
        starting your plant journey, our knowledgeable team is here to offer
        guidance and support. We're committed to sustainable practices and
        strive to bring you the highest quality plants while minimizing our
        environmental impact. Discover the perfect plant to enhance your home,
        office, or garden with Plantos.
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
    </div>
  );
}

export default AboutUs;
