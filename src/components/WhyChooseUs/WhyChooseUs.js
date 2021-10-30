import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="container choose-container">
        <h1 className="choose-header">Why Choose Us</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-2 justify-content-center">
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <i className="fas fa-money-check-alt"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">Ultimate flexibility</h5>
              <p className="card-text choose-text">
                You’re in control, with free cancellation and payment options to
                satisfy any plan or budget.
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <i className="fas fa-landmark"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">Memorable experiences</h5>
              <p className="card-text choose-text">
                Browse and book tours and activities so incredible, you’ll want
                to tell your friends.
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">Quality at our core</h5>
              <p className="card-text choose-text">
                High quality standards. Millions of reviews. A Tripadvisor
                company.
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <i className="fas fa-medal"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">Award-winning support</h5>
              <p className="card-text choose-text">
                New price? New plan? No problem. We’re here to help, 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
