import React from "react";

function ServiceCard({ title, description, image }) {
  return (
    <div className="card-wrapper">
      <img src={image} className="card-img-top p-3" alt={title} />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;