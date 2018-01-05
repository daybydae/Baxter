import React from 'react';
import { Link } from 'react-router-dom';

const SitterDetail = ({ sitter }) => {

  return (
    <div className="sitter-detail">
      <h3>{sitter.sittername}</h3>
      <ul className="sitter-detail-list">
        <li>Rating: </li>
        <li>Description: {sitter.description}</li>
        <li>Rates: {sitter.rates}</li>
      </ul>
      <br />
      <div className="reviews">
        <h3>Reviews</h3>

      </div>
    </div>
  );
}

export default SitterDetail;
