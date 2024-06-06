import React from 'react';
import './ContentCard.css';

const ContentCard = ({ offering, onAddToCart }) => {
  const {
    logo,
    link,
    title,
    views,
    locations = [],
    rating,
    type,
    price,
  } = offering;

  return (
    <div className="card">
      <div className="card-header">
        <img src={logo} alt="logo" className="card-logo" />
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">{link}</a>
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-stats">
          <span className="card-stat"><i className="fa fa-eye"></i> {views}</span>
          <span className="card-stat"><i className="fa fa-globe"></i> {locations.join(', ')}</span>
          <span className="card-stat">{rating}</span>
          <span className="card-stat">{type}</span>
        </div>
        <div className="card-price">Starting from ₹{price}</div>
      </div>
      <div className="card-footer">
        <i className="fa fa-bookmark"></i>
        <button onClick={() => onAddToCart(offering)}><i className="fa fa-plus"></i></button>
      </div>
    </div>
  );
};

export default ContentCard;
