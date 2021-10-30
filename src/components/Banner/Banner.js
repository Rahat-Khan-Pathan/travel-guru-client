import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./Banner.css";

const Banner = () => {
  return (
    <>
    <div className="banner-container">
    </div>
    <div className="banner-text">
        <h1 className="banner-text-1">Find Your Special Tour Today</h1>
        <h3 className="banner-text-1">With <span className="site-name">Travel Guru</span> </h3>
        <NavHashLink to="/home#offers"><button className="btn btn-warning offer-btn">VIEW OFFERS</button></NavHashLink>
      </div>
    </>
  );
};

export default Banner;
