import React from 'react';
import { Link } from 'react-router-dom';

const SitterDetail = ({ sitter }) => {

  return (
    <div className="sitter-detail">
      <h3 className="sitter-name-show">{sitter.sittername}</h3>
      <div className="sitter-details-list-box">
        <ul className="sitter-detail-list">
          <li>Rating: </li>
          <li>Description: &nbsp {sitter.description}</li>
          <li>Rates: &nbsp{sitter.rates}</li>
        </ul>

      </div>

      <br />

    <div className="reviews">
        <h3 className="sitter-reviews-show">Reviews</h3>
        <div className="sitter-reviews-list-box">
          <ul className="sitter-reviews-list">
            <li>Rating: </li>
            <li>Description: &nbsp {sitter.description}</li>
            <li>Rates: &nbsp{sitter.rates}</li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default SitterDetail;
