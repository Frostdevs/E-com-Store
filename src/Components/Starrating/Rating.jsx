
// StarRating.jsx
import React from 'react';
import './Rating.css';

const StarRating = ({ rating }) => {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

export default StarRating;