import React from "react";
import Offer from "../Offer/Offer";
import "./Offers.css";

const Offers = (props) => {
  const {offers} = props;
  return (
    <div className="offers-container" id="offers">
      <h1 className="offers-header">What We Offer</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-2">
        {
            offers.map(offer => <Offer key={offer._id} data={offer}></Offer>)
        }
        </div>
      </div>
    </div>
  );
};

export default Offers;
