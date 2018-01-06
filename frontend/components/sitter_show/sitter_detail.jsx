import React from 'react';
import { Link } from 'react-router-dom';

const SitterDetail = ({ sitter }) => {

  return (
    <div className="sitter-detail">
      <h5 className="sitter-name-show">
        {sitter.sittername}
      </h5>

      <div className="sitter-details-list-box">
        <ul className="sitter-detail-list">
          <li>Rating: </li>
          <li>
            <a href="#reviews">
              {
                //{sitter.reviews.count}
              }
            </a>
          </li>
          <li>Dog Sitting
            <span className="sitter-detail-list">
              {sitter.rates}
            </span>
            <div className="sitter-detail-list">

            </div>
          </li>
          <li>&nbsp;{sitter.location}</li>
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
