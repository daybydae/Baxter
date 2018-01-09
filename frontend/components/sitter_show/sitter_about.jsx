import React from 'react';
import { Link } from 'react-router-dom';

const SitterAbout = ({ sitter }) => {

  return (
    <div className="sitter-description-wrap">

      <div className="section-row">
        <div className="section-col-main">
          <h2 className="about-title">
            About {sitter.sittername}
          </h2>
        </div>
      </div>

      <div className="section-row">
        <div className="section-col-meta">

        </div>
        <div className="section-col-main">
          <h4>
            Need to add description title column to sitters model
          </h4>
          <div className="sitter-description">
            <p>
              {sitter.description}
            </p>
          </div>
        </div>

      </div>

    </div>
  );

};

export default SitterAbout;
