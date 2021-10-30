import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  // Change Title
  useEffect(() => {
    document.title = "Travel Guru | About";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container about-container">
      <h1 className="booking-header">About Us</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-2 about-row px-2 g-4">
        <div className="col d-flex flex-column justify-content-center align-items-center ">
          <p className="about">
            Travel Guru, a Tripadvisor company, makes it easy to find and book
            something you'll love to do. With access to the world's largest
            selection of high-quality experiences, there's always something new
            to discover, both near and far from home. From must-do moments to
            who-knew discoveries, see the familiar in a new way, or the unknown
            for the first time!
            <br />
            <br />
            With industry-leading flexibility and last-minute availability, it's
            never too late to make any day extraordinary. Plan ahead, or decide
            that morning. Change your dates. Or change your mind entirely! This
            is your time off, your way, and we're here to help.
            <br />
            <br />
            We also know that your time off is precious. So we ruthlessly focus
            on quality, and we specialize in experiences so incredible, you'll
            want to tell your friends. Spend less time searching, and more time
            making memories. Discover story-worthy experiences, anytime,
            anywhere.
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img src="/about.svg" className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};
export default About;
