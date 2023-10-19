import React from "react";
import "./../../css/Card.css";

const Card = ({ img, title, author, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={`Card-${img}`} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <h5>{author}</h5>
      </div>
    </div>
  );
};

export default Card;
