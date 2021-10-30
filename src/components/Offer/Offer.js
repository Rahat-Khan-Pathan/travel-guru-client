import React from "react";
import { useHistory } from "react-router";
import "./Offer.css";

const Offer = (props) => {
  const { _id, name, image, price, description, days, nights } = props.data;
  const history = useHistory();
  const handleBook = ()=> {
      history.push(`/offers/${_id}`);
  }
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title name">{name}</h5>
          <p className="card-text price">${price}</p>
          <p className="card-text duration">
            {" "}
            <i className="fas fa-clock"></i> {days} DAYS - {nights} NIGHTS{" "}
          </p>
          <p className="cart-text description">{description}</p>
          <button className="btn btn-outline-dark book-btn" onClick={handleBook}>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
