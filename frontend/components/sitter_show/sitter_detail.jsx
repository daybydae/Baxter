import React from 'react';
import { Link } from 'react-router-dom';


const SitterDetail = ({ sitter }) => {

  return (
    <div className="sitter-summary-wrap">

      <div className="sitter-summary-wrap-margin-bottom-15">
        <div className="sitter-summary-media">
          <span className="sitter-show-profile-icon">
            <img
              className="sitter-profile-icon"
              src={sitter.image_thumb}
            />
          </span>
          <div className="media-body">
            <div className="sitter-name-profile">
              <strong>{sitter.sittername}</strong>
            </div>
            <div className="sitter-neighborhood">

                {sitter.location}

            </div>
            <div className="sitter-rating-profile">
              RATING
              {
                // {sitter.ratings}
                // {sitter.rating.count}
              }
            </div>

          </div>
        </div>
      </div>


      <div className="sitter-services-wrap">

        <div className="sitter-rates-summary-wrap">

          <div>
            <label>
              WHILE YOU'RE AWAY
            </label>
            <div className="sitter-rates-summary-margin-bottom">

              <div className="title-row fluid-row center">
                <div className="fluid-col">
                  <h2 className="h5">
                    Dog Sitting
                  </h2>
                </div>
                <div className="fluid-col text-right">
                  <div className="h2">
                    <strong>
                      ${sitter.rates}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="subtext-row fluid-row">
                <div className="fluid-col">
                  <h2 className="text-muted">
                    in your home
                  </h2>
                </div>
                <div className="fluid-col text-right">
                  <h2 className="text-muted">
                    per night
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-wrap">
        <div className="contact-favorite-wrap">
          <div className="favorite-button-col">
            <button type="button" title="Save to Favorites" className="favorite-button">

              <span className="default-state">
                <i className="far fa-heart fa-lg" id="open-heart"></i>
              </span>
              <span className="favorited-state">
                <i className="fas fa-heart fa-lg"></i>
              </span>
            </button>
          </div>

          <div className="contact-button-col">
            <Link to={`/sitters/${sitter.id}/bookings`} className="contact-button">
              Contact {sitter.sittername}
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

export default SitterDetail;
