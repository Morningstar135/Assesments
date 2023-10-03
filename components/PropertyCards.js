import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const { id, name, image, price } = property;

  return (
    <div className="property-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}/night</p>
      <Link to={`/property/${id}`}>Book Now</Link>
    </div>
  );
};

export default PropertyCard;